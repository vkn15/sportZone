/*======================================================
    SportsZone
    File: js/cart.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const cartContainer = document.getElementById("cart-items");

const emptyCart = document.getElementById("empty-cart");

const subtotalElement = document.getElementById("subtotal");

const shippingElement = document.getElementById("shipping");

const totalElement = document.getElementById("grand-total");

const couponButton = document.getElementById("apply-coupon");

const couponInput = document.getElementById("coupon-code");

/* ===========================
   Variables
=========================== */

let shippingCharge = 99;

let discount = 0;

/* ===========================
   Render Cart
=========================== */

function renderCart() {
  if (!cartContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.style.display = "none";

    if (emptyCart) {
      emptyCart.style.display = "block";
    }

    updateSummary();

    return;
  }

  cartContainer.style.display = "flex";

  if (emptyCart) {
    emptyCart.style.display = "none";
  }

  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const product = getProductById(item.id);

    if (!product) return;

    cartContainer.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div class="cart-details">

                    <h3>

                        ${product.name}

                    </h3>

                    <p class="cart-brand">

                        ${product.brand}

                    </p>

                    <div class="cart-price">

                        ${formatPrice(product.price)}

                    </div>

                    <div class="quantity-controls">

                        <button
                            onclick="decreaseCartQuantity(${product.id})">

                            -

                        </button>

                        <span>

                            ${item.quantity}

                        </span>

                        <button
                            onclick="increaseCartQuantity(${product.id})">

                            +

                        </button>

                    </div>

                    <button
                        class="remove-btn"
                        onclick="removeItem(${product.id})">

                        Remove

                    </button>

                </div>

            </div>

        `;
  });

  updateSummary();
}

/* ===========================
   Cart Quantity
=========================== */

function increaseCartQuantity(id) {
  const cart = getCart();

  const item = cart.find((product) => product.id === id);

  if (!item) return;

  item.quantity++;

  saveCart(cart);

  updateCartCount();

  renderCart();
}

function decreaseCartQuantity(id) {
  const cart = getCart();

  const item = cart.find((product) => product.id === id);

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    removeItem(id);

    return;
  }

  saveCart(cart);

  updateCartCount();

  renderCart();
}
/* ===========================
   Remove Item
=========================== */

function removeItem(id) {
  let cart = getCart();

  cart = cart.filter((item) => item.id !== id);

  saveCart(cart);

  updateCartCount();

  showToast("Product removed from cart.");

  renderCart();
}

/* ===========================
   Order Summary
=========================== */

function updateSummary() {
  const cart = getCart();

  let subtotal = 0;

  cart.forEach((item) => {
    const product = getProductById(item.id);

    if (!product) return;

    subtotal += product.price * item.quantity;
  });

  if (subtotal === 0) {
    shippingCharge = 0;
  } else {
    shippingCharge = subtotal >= 999 ? 0 : 99;
  }

  const total = subtotal + shippingCharge - discount;

  if (subtotalElement) {
    subtotalElement.textContent = formatPrice(subtotal);
  }

  if (shippingElement) {
    shippingElement.textContent =
      shippingCharge === 0 ? "FREE" : formatPrice(shippingCharge);
  }

  if (totalElement) {
    totalElement.textContent = formatPrice(total);
  }
}

/* ===========================
   Coupon Code
=========================== */

function applyCoupon() {
  if (!couponInput) return;

  const code = couponInput.value.trim().toUpperCase();

  if (code === "") {
    showToast("Enter coupon code.");

    return;
  }

  if (code === "SPORT10") {
    discount = 100;

    showToast("Coupon Applied!");
  } else if (code === "SPORT20") {
    discount = 200;

    showToast("Coupon Applied!");
  } else {
    discount = 0;

    showToast("Invalid Coupon Code");
  }

  updateSummary();
}

/* ===========================
   Events
=========================== */

if (couponButton) {
  couponButton.addEventListener(
    "click",

    applyCoupon,
  );
}

/* ===========================
   Initialize
=========================== */

document.addEventListener(
  "DOMContentLoaded",

  () => {
    renderCart();
  },
);
