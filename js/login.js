/*======================================================
    SportsZone
    File: js/login.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const loginForm = document.getElementById("login-form");

const emailInput = document.getElementById("login-email");

const passwordInput = document.getElementById("login-password");

const rememberMe = document.getElementById("remember-me");

/* ===========================
   Load Remembered Email
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  const rememberedEmail = localStorage.getItem("sportszone_remember_email");

  if (rememberedEmail) {
    emailInput.value = rememberedEmail;

    rememberMe.checked = true;
  }
});

/* ===========================
   Login
=========================== */

function login(event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();

  const password = passwordInput.value.trim();

  const users = getUsers();

  const user = users.find(
    (item) => item.email.toLowerCase() === email && item.password === password,
  );

  if (!user) {
    showToast("Invalid email or password.");

    return;
  }

  saveCurrentUser(user);

  if (rememberMe.checked) {
    localStorage.setItem(
      "sportszone_remember_email",

      email,
    );
  } else {
    localStorage.removeItem("sportszone_remember_email");
  }

  showToast("Login successful.");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

/* ===========================
   Events
=========================== */

if (loginForm) {
  loginForm.addEventListener(
    "submit",

    login,
  );
}
