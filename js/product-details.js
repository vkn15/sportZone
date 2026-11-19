/*======================================================
    SportsZone
    File: js/product-details.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const detailsContainer = document.getElementById("product-details");

const relatedContainer = document.getElementById("related-products");

let quantity = 1;

/* ===========================
   Get Product ID
=========================== */

const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));

const product = getProductById(productId);

/* ===========================
   Quantity
=========================== */

function increaseQuantity() {
  quantity++;

  document.getElementById("quantity").value = quantity;
}

function decreaseQuantity() {
  if (quantity === 1) return;

  quantity--;

  document.getElementById("quantity").value = quantity;
}

/* ===========================
   Render Product
=========================== */

function renderProduct() {
  if (!detailsContainer) return;

  if (!product) {
    detailsContainer.innerHTML = `

            <div class="no-products">

                <h2>

                    Product Not Found

                </h2>

                <p>

                    The requested product does not exist.

                </p>

            </div>

        `;

    return;
  }

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );

  detailsContainer.innerHTML = `

        <div class="product-image">

            <img
                src="${product.image}"
                alt="${product.name}">

        </div>

        <div class="product-info">

            <h2>

                ${product.name}

            </h2>

            <p class="product-brand">

                Brand :
                <strong>${product.brand}</strong>

            </p>

            <div class="product-rating">

                ${generateStars(product.rating)}

                <span>

                    (${product.reviews} Reviews)

                </span>

            </div>

            <div class="product-price">

                <span class="current-price">

                    ${formatPrice(product.price)}

                </span>

                <span class="old-price">

                    ${formatPrice(product.oldPrice)}

                </span>

                <span class="discount">

                    ${discount}% OFF

                </span>

            </div>

            <div class="stock">

                ${product.stock} Items In Stock

            </div>

            <div class="quantity-box">

                <button
                    onclick="decreaseQuantity()">

                    -

                </button>

                <input
                    id="quantity"
                    type="text"
                    value="1"
                    readonly>

                <button
                    onclick="increaseQuantity()">

                    +

                </button>

            </div>

            <div class="product-actions">

                <button
                    class="add-cart-btn"
                    onclick="addCurrentProductToCart()">

                    <i class="fa-solid fa-cart-shopping"></i>

                    Add To Cart

                </button>

                <button
                    class="wishlist-btn"
                    onclick="toggleCurrentWishlist()">

                    <i class="${
                      isInWishlist(product.id) ? "fa-solid" : "fa-regular"
                    } fa-heart"></i>

                    Wishlist

                </button>

            </div>

            <div class="product-description">

                <h3>

                    Description

                </h3>

                <p>

                    ${product.description}

                </p>

            </div>

            <div class="product-features">

                <h3>

                    Features

                </h3>

                <ul>

                    ${product.features
                      .map(
                        (feature) => `

                        <li>

                            <i class="fa-solid fa-circle-check"></i>

                            ${feature}

                        </li>

                    `,
                      )
                      .join("")}

                </ul>

            </div>

        </div>

    `;
}
/* ===========================
   Related Products
=========================== */

function renderRelatedProducts() {
  if (!relatedContainer || !product) return;

  const related = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  relatedContainer.innerHTML = related
    .map(
      (item) => `

        <div class="product-card">

            <div class="product-image">

                <a href="product-details.html?id=${item.id}">

                    <img
                        src="${item.image}"
                        alt="${item.name}">

                </a>

                <span class="badge">

                    ${item.badge}

                </span>

            </div>

            <div class="product-info">

                <a href="product-details.html?id=${item.id}">

                    <h3>

                        ${item.name}

                    </h3>

                </a>

                <p>

                    ${item.brand}

                </p>

                <div class="rating">

                    ${generateStars(item.rating)}

                    (${item.reviews})

                </div>

                <div class="price">

                    ${formatPrice(item.price)}

                    <span class="old-price">

                        ${formatPrice(item.oldPrice)}

                    </span>

                </div>

                <div class="product-actions">

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${item.id})">

                        <i class="fa-solid fa-cart-shopping"></i>

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    `,
    )
    .join("");
}

/* ===========================
   Add Current Product
=========================== */

function addCurrentProductToCart() {
  const cart = getCart();

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,

      quantity: quantity,
    });
  }

  saveCart(cart);

  updateCartCount();

  showToast("Product added to cart.");
}

/* ===========================
   Wishlist
=========================== */

function toggleCurrentWishlist() {
  toggleWishlist(product.id);

  renderProduct();
}

/* ===========================
   Initialize
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  renderProduct();

  renderRelatedProducts();
});
