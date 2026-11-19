/*======================================================
    SportsZone
    File: js/register.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const registerForm = document.getElementById("register-form");

const nameInput = document.getElementById("register-name");

const emailInput = document.getElementById("register-email");

const phoneInput = document.getElementById("register-phone");

const passwordInput = document.getElementById("register-password");

const confirmPasswordInput = document.getElementById("confirm-password");

/* ===========================
   Register User
=========================== */

function registerUser(event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  const email = emailInput.value.trim().toLowerCase();

  const phone = phoneInput.value.trim();

  const password = passwordInput.value.trim();

  const confirmPassword = confirmPasswordInput.value.trim();

  if (!name || !email || !phone || !password || !confirmPassword) {
    showToast("Please fill all fields.");

    return;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match.");

    return;
  }

  const users = getUsers();

  const alreadyExists = users.find(
    (user) => user.email.toLowerCase() === email,
  );

  if (alreadyExists) {
    showToast("Email already registered.");

    return;
  }

  const newUser = {
    id: Date.now(),

    name,

    email,

    phone,

    password,
  };

  users.push(newUser);

  saveUsers(users);

  saveCurrentUser(newUser);

  showToast("Registration Successful!");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

/* ===========================
   Events
=========================== */

if (registerForm) {
  registerForm.addEventListener(
    "submit",

    registerUser,
  );
}
