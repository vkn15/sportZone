/*======================================================
    SportsZone
    File: js/home.js
======================================================*/

/* ===========================
   Categories
=========================== */

const categories = [
  {
    name: "Cricket",
    image: "images/categories/cricket.jpg",
  },

  {
    name: "Football",
    image: "images/categories/football.jpg",
  },

  {
    name: "Basketball",
    image: "images/categories/basketball.jpg",
  },

  {
    name: "Badminton",
    image: "images/categories/badminton.jpg",
  },

  {
    name: "Tennis",
    image: "images/categories/tennis.jpg",
  },

  {
    name: "Gym Equipment",
    image: "images/categories/gym.jpg",
  },
];

/* ===========================
   Brands
=========================== */

const brands = ["Nike", "Adidas", "Yonex", "SG", "Wilson", "Puma"];

/* ===========================
   Render Categories
=========================== */

function renderCategories() {
  const container = document.getElementById("category-container");

  if (!container) return;

  container.innerHTML = categories
    .map(
      (category) => `

        <a
            href="products.html?category=${encodeURIComponent(category.name)}"
            class="category-card">

            <img
                src="${category.image}"
                alt="${category.name}">

            <h3>${category.name}</h3>

        </a>

    `,
    )
    .join("");
}

/* ===========================
   Render Products
=========================== */

function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");

  if (!container) return;

  const featuredProducts = products.slice(0, 8);

  container.innerHTML = featuredProducts
    .map(
      (product) => `

        <div class="product-card">

            <div class="product-image">

                <a href="product-details.html?id=${product.id}">

                    <img
                        src="${product.image}"
                        alt="${product.name}">

                </a>

                <span class="badge">

                    ${product.badge}

                </span>

            </div>

            <div class="product-info">

                <a href="product-details.html?id=${product.id}">

                    <h3>${product.name}</h3>

                </a>

                <p>

                    ${product.brand}

                </p>

                <div class="rating">

                    ${generateStars(product.rating)}

                    (${product.reviews})

                </div>

                <div class="price">

                    ${formatPrice(product.price)}

                    <span class="old-price">

                        ${formatPrice(product.oldPrice)}

                    </span>

                </div>

                <div class="product-actions">

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})">

                        <i class="fa-solid fa-cart-shopping"></i>

                        Add to Cart

                    </button>

                    <button
                        class="wishlist-btn"
                        onclick="toggleWishlist(${product.id}); initHome();">

                        <i class="${isInWishlist(product.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>

                    </button>

                </div>

            </div>

        </div>

    `,
    )
    .join("");
}

/* ===========================
   Render Brands
=========================== */

function renderBrands() {
  const container = document.getElementById("brand-container");

  if (!container) return;

  container.innerHTML = brands
    .map(
      (brand) => `

        <div class="brand-card">

            <img
                src="images/brands/${brand.toLowerCase()}.png"
                alt="${brand}">

        </div>

    `,
    )
    .join("");
}

/* ===========================
   Home Init
=========================== */

function initHome() {
  renderCategories();

  renderFeaturedProducts();

  renderBrands();
}

/* ===========================
   Page Ready
=========================== */

document.addEventListener("DOMContentLoaded", initHome);
