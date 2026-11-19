/*======================================================
    SportsZone
    File: js/wishlist.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const wishlistContainer = document.getElementById("wishlist-container");

const emptyWishlist = document.getElementById("empty-wishlist");

/* ===========================
   Render Wishlist
=========================== */

function renderWishlist() {
  if (!wishlistContainer) return;

  const wishlist = getWishlist();

  if (wishlist.length === 0) {
    wishlistContainer.style.display = "none";

    if (emptyWishlist) {
      emptyWishlist.style.display = "block";
    }

    return;
  }

  wishlistContainer.style.display = "grid";

  if (emptyWishlist) {
    emptyWishlist.style.display = "none";
  }

  wishlistContainer.innerHTML = "";

  wishlist.forEach((id) => {
    const product = getProductById(id);

    if (!product) return;

    wishlistContainer.innerHTML += `

            <div class="wishlist-card">

                <img
                    src="${product.image}"
                    alt="${product.name}">

                <div class="wishlist-info">

                    <h3>

                        ${product.name}

                    </h3>

                    <p class="wishlist-brand">

                        ${product.brand}

                    </p>

                    <div class="wishlist-rating">

                        ${generateStars(product.rating)}

                        (${product.reviews})

                    </div>

                    <div class="wishlist-price">

                        <span class="current-price">

                            ${formatPrice(product.price)}

                        </span>

                        <span class="old-price">

                            ${formatPrice(product.oldPrice)}

                        </span>

                    </div>

                    <div class="wishlist-actions">

                        <button
                            class="add-cart-btn"
                            onclick="moveToCart(${product.id})">

                            <i class="fa-solid fa-cart-shopping"></i>

                            Add To Cart

                        </button>

                        <button
                            class="remove-btn"
                            onclick="removeWishlistItem(${product.id})">

                            Remove

                        </button>

                    </div>

                </div>

            </div>

        `;
  });
}

/* ===========================
   Move To Cart
=========================== */

function moveToCart(id) {
  addToCart(id);

  removeWishlistItem(id);
}

/* ===========================
   Remove Wishlist Item
=========================== */

function removeWishlistItem(id) {
  removeFromWishlist(id);

  renderWishlist();
}

/* ===========================
   Add All To Cart
=========================== */

function addAllToCart() {
  const wishlist = getWishlist();

  if (wishlist.length === 0) {
    showToast("Wishlist is empty.");

    return;
  }

  wishlist.forEach((id) => {
    addToCart(id);
  });

  saveWishlist([]);

  updateWishlistCount();

  renderWishlist();

  showToast("All products moved to cart.");
}

/* ===========================
   Initialize
=========================== */

document.addEventListener(
  "DOMContentLoaded",

  () => {
    renderWishlist();
  },
);
