/*======================================================
    SportsZone
    File: js/checkout.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const checkoutItems = document.getElementById("checkout-items");

const subtotalElement = document.getElementById("checkout-subtotal");

const shippingElement = document.getElementById("checkout-shipping");

const totalElement = document.getElementById("checkout-total");

const checkoutForm = document.getElementById("checkout-form");

const placeOrderButton = document.getElementById("place-order");

/* ===========================
   Variables
=========================== */

let subtotal = 0;

let shipping = 0;

let grandTotal = 0;

/* ===========================
   Render Order
=========================== */

function renderCheckout() {
  const cart = getCart();

  if (cart.length === 0) {
    showToast("Your cart is empty.");

    setTimeout(() => {
      location.href = "cart.html";
    }, 1000);

    return;
  }

  checkoutItems.innerHTML = "";

  subtotal = 0;

  cart.forEach((item) => {
    const product = getProductById(item.id);

    if (!product) return;

    subtotal += product.price * item.quantity;

    checkoutItems.innerHTML += `

            <div class="checkout-item">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div class="checkout-item-details">

                    <h4>

                        ${product.name}

                    </h4>

                    <p>

                        Qty : ${item.quantity}

                    </p>

                </div>

                <div class="checkout-price">

                    ${formatPrice(product.price * item.quantity)}

                </div>

            </div>

        `;
  });

  shipping = subtotal >= 999 ? 0 : 99;

  grandTotal = subtotal + shipping;

  subtotalElement.textContent = formatPrice(subtotal);

  shippingElement.textContent = shipping === 0 ? "FREE" : formatPrice(shipping);

  totalElement.textContent = formatPrice(grandTotal);
}

/* ===========================
   Place Order
=========================== */

function placeOrder(event) {
  event.preventDefault();

  if (!checkoutForm.checkValidity()) {
    checkoutForm.reportValidity();

    return;
  }

  const order = {
    customer: {
      name: document.getElementById("name").value.trim(),

      email: document.getElementById("email").value.trim(),

      phone: document.getElementById("phone").value.trim(),

      address: document.getElementById("address").value.trim(),

      city: document.getElementById("city").value.trim(),

      state: document.getElementById("state").value.trim(),

      pincode: document.getElementById("pincode").value.trim(),

      payment: document.getElementById("payment").value,
    },

    items: getCart(),

    subtotal,

    shipping,

    total: grandTotal,

    date: new Date().toLocaleString(),
  };

  localStorage.setItem(
    "sportszone_last_order",

    JSON.stringify(order),
  );

  localStorage.removeItem(CART_KEY);

  updateCartCount();

  showToast("Order placed successfully!");

  setTimeout(() => {
    location.href = "order-success.html";
  }, 1200);
}

/* ===========================
   Events
=========================== */

if (placeOrderButton) {
  placeOrderButton.addEventListener(
    "click",

    placeOrder,
  );
}

/* ===========================
   Initialize
=========================== */

document.addEventListener(
  "DOMContentLoaded",

  renderCheckout,
);
