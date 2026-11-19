/*======================================================
    SportsZone
    File: js/profile.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const profileName = document.getElementById("profile-name");

const profileEmail = document.getElementById("profile-email");

const profilePhone = document.getElementById("profile-phone");

const ordersList = document.getElementById("orders-list");

const logoutButton = document.getElementById("logout-btn");

const editProfileButton = document.getElementById("edit-profile-btn");

const changePasswordButton = document.getElementById("change-password-btn");

/* ===========================
   Load Profile
=========================== */

function loadProfile() {
  const user = getCurrentUser();

  if (!user) {
    showToast("Please login first.");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);

    return;
  }

  profileName.textContent = user.name;

  profileEmail.textContent = user.email;

  profilePhone.textContent = user.phone;
}

/* ===========================
   Recent Order
=========================== */

function loadOrders() {
  if (!ordersList) return;

  const order = JSON.parse(localStorage.getItem("sportszone_last_order"));

  if (!order) {
    ordersList.innerHTML = `

            <div class="no-orders">

                No orders found.

            </div>

        `;

    return;
  }

  ordersList.innerHTML = `

        <div class="order-item">

            <div class="order-info">

                <h4>

                    ${order.items.length} Product(s)

                </h4>

                <p>

                    ${order.date}

                </p>

                <p>

                    Payment :

                    ${order.customer.payment}

                </p>

            </div>

            <div class="order-total">

                ${formatPrice(order.total)}

            </div>

        </div>

    `;
}

/* ===========================
   Edit Profile
=========================== */

function editProfile() {
  showToast("Edit Profile feature coming soon.");
}

/* ===========================
   Change Password
=========================== */

function changePassword() {
  showToast("Change Password feature coming soon.");
}

/* ===========================
   Logout
=========================== */

function logoutUser() {
  logout();
}

/* ===========================
   Events
=========================== */

if (logoutButton) {
  logoutButton.addEventListener(
    "click",

    logoutUser,
  );
}

if (editProfileButton) {
  editProfileButton.addEventListener(
    "click",

    editProfile,
  );
}

if (changePasswordButton) {
  changePasswordButton.addEventListener(
    "click",

    changePassword,
  );
}

/* ===========================
   Initialize
=========================== */

document.addEventListener(
  "DOMContentLoaded",

  () => {
    loadProfile();

    loadOrders();
  },
);
