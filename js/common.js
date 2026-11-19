/*======================================================
    SportsZone
    File: js/common.js
======================================================*/

/* ===========================
   Local Storage Keys
=========================== */

const CART_KEY = "sportszone_cart";
const WISHLIST_KEY = "sportszone_wishlist";
const USERS_KEY = "sportszone_users";
const CURRENT_USER_KEY = "sportszone_current_user";

/* ===========================
   Local Storage Helpers
=========================== */

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

function saveWishlist(items) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
}

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function saveCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

/* ===========================
   Toast
=========================== */

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toast.timer);

  toast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* ===========================
   Currency
=========================== */

function formatPrice(price) {
  return "₹" + Number(price).toLocaleString("en-IN");
}

/* ===========================
   Product Helper
=========================== */

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

/* ===========================
   Rating Stars
=========================== */

function generateStars(rating) {
  let html = "";

  const fullStars = Math.round(rating);

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      html += '<i class="fa-solid fa-star"></i>';
    } else {
      html += '<i class="fa-regular fa-star"></i>';
    }
  }

  return html;
}

/* ===========================
   Cart Count
=========================== */

function updateCartCount() {
  const cart = getCart();

  let total = 0;

  cart.forEach((item) => {
    total += item.quantity;
  });

  const badge = document.getElementById("cart-count");

  if (badge) {
    badge.textContent = total;
  }
}

/* ===========================
   Wishlist Count
=========================== */

function updateWishlistCount() {
  const wishlist = getWishlist();

  const badge = document.getElementById("wishlist-count");

  if (badge) {
    badge.textContent = wishlist.length;
  }
}

/* ===========================
   Add To Cart
=========================== */

function addToCart(id) {
  const cart = getCart();

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id,

      quantity: 1,
    });
  }

  saveCart(cart);

  updateCartCount();

  showToast("Product added to cart.");
}

/* ===========================
   Remove Cart
=========================== */

function removeFromCart(id) {
  const cart = getCart().filter((item) => item.id !== id);

  saveCart(cart);

  updateCartCount();
}

/* ===========================
   Wishlist
=========================== */

function addToWishlist(id) {
  const wishlist = getWishlist();

  if (wishlist.includes(id)) {
    return;
  }

  wishlist.push(id);

  saveWishlist(wishlist);

  updateWishlistCount();

  showToast("Added to wishlist.");
}

function removeFromWishlist(id) {
  const wishlist = getWishlist().filter((item) => item !== id);

  saveWishlist(wishlist);

  updateWishlistCount();

  showToast("Removed from wishlist.");
}

function toggleWishlist(id) {
  const wishlist = getWishlist();

  if (wishlist.includes(id)) {
    removeFromWishlist(id);
  } else {
    addToWishlist(id);
  }
}

function isInWishlist(id) {
  return getWishlist().includes(id);
}

/* ===========================
   Login
=========================== */

function isLoggedIn() {
  return getCurrentUser() !== null;
}

function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);

  showToast("Logged Out");

  setTimeout(() => {
    location.href = "login.html";
  }, 800);
}

/* ===========================
   Newsletter
=========================== */

const newsletter = document.getElementById("newsletter-form");

if (newsletter) {
  newsletter.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = this.querySelector("input").value.trim();

    if (!email) {
      showToast("Enter email address");

      return;
    }

    showToast("Subscribed Successfully");

    this.reset();
  });
}

/* ===========================
   Initialize
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  updateWishlistCount();
});
