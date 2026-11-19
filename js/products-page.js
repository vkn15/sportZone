/*======================================================
    SportsZone
    File: js/products-page.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const categoryInputs = document.querySelectorAll('input[name="category"]');
const brandInputs = document.querySelectorAll(".brand-filter");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const sortSelect = document.getElementById("sort-products");
const productCount = document.getElementById("product-count");
const pagination = document.getElementById("pagination");

/* ===========================
   Variables
=========================== */

let filteredProducts = [...products];

let currentPage = 1;

const productsPerPage = 8;

/* ===========================
   Render Products
=========================== */

function renderProducts() {
  if (!productsContainer) return;

  const start = (currentPage - 1) * productsPerPage;

  const end = start + productsPerPage;

  const currentProducts = filteredProducts.slice(start, end);

  if (currentProducts.length === 0) {
    productsContainer.innerHTML = `

            <div class="no-products">

                <h2>No Products Found</h2>

                <p>Try changing your filters.</p>

            </div>

        `;

    if (pagination) pagination.innerHTML = "";

    if (productCount) productCount.textContent = "0 Products";

    return;
  }

  productsContainer.innerHTML = currentProducts
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

                <p>${product.brand}</p>

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

                        Add To Cart

                    </button>

                    <button
                        class="wishlist-btn"
                        onclick="toggleWishlist(${product.id});renderProducts();">

                        <i class="${isInWishlist(product.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>

                    </button>

                </div>

            </div>

        </div>

    `,
    )
    .join("");

  if (productCount) {
    productCount.textContent = `${filteredProducts.length} Products Found`;
  }

  renderPagination();
}

/* ===========================
   Pagination
=========================== */

function renderPagination() {
  if (!pagination) return;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `

            <button
                class="${currentPage === i ? "active" : ""}"
                onclick="changePage(${i})">

                ${i}

            </button>

        `;
  }
}

function changePage(page) {
  currentPage = page;

  renderProducts();

  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}

/* ===========================
   Filters
=========================== */

function applyFilters() {
  const category =
    document.querySelector('input[name="category"]:checked')?.value || "All";

  const brands = Array.from(brandInputs)
    .filter((item) => item.checked)
    .map((item) => item.value);

  const maxPrice = priceRange ? Number(priceRange.value) : Infinity;

  const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

  filteredProducts = products.filter((product) => {
    const categoryMatch = category === "All" || product.category === category;

    const brandMatch = brands.length === 0 || brands.includes(product.brand);

    const priceMatch = product.price <= maxPrice;

    const searchMatch =
      product.name.toLowerCase().includes(keyword) ||
      product.brand.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword);

    return categoryMatch && brandMatch && priceMatch && searchMatch;
  });

  applySorting();
}

/* ===========================
   Sorting
=========================== */

function applySorting() {
  if (!sortSelect) {
    renderProducts();

    return;
  }

  switch (sortSelect.value) {
    case "low-high":
      filteredProducts.sort((a, b) => a.price - b.price);

      break;

    case "high-low":
      filteredProducts.sort((a, b) => b.price - a.price);

      break;

    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);

      break;

    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

      break;
  }

  currentPage = 1;

  renderProducts();
}

/* ===========================
   URL Category
=========================== */

function loadURLCategory() {
  const params = new URLSearchParams(window.location.search);

  const category = params.get("category");

  if (!category) return;

  categoryInputs.forEach((input) => {
    if (input.value === category) {
      input.checked = true;
    }
  });
}

/* ===========================
   Events
=========================== */

categoryInputs.forEach((input) => {
  input.addEventListener("change", applyFilters);
});

brandInputs.forEach((input) => {
  input.addEventListener("change", applyFilters);
});

if (priceRange) {
  priceRange.addEventListener("input", () => {
    if (priceValue) {
      priceValue.textContent = formatPrice(priceRange.value);
    }

    applyFilters();
  });
}

if (searchInput) {
  searchInput.addEventListener(
    "keyup",

    applyFilters,
  );
}

if (sortSelect) {
  sortSelect.addEventListener(
    "change",

    applySorting,
  );
}

/* ===========================
   Initialize
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  loadURLCategory();

  applyFilters();
});
