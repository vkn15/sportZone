/*======================================================
    SportsZone
    File: js/script.js
======================================================*/

/* ===========================
   Active Navigation
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});

/* ===========================
   Mobile Menu
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");

  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });
});

/* ===========================
   Sticky Navbar
=========================== */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

/* ===========================
   Scroll To Top
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  const scrollTop = document.getElementById("scroll-top");

  if (!scrollTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTop.classList.add("show");
    } else {
      scrollTop.classList.remove("show");
    }
  });

  scrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
});

/* ===========================
   Smooth Anchor Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ===========================
   Image Fade In
=========================== */

window.addEventListener("load", () => {
  document.querySelectorAll("img").forEach((img) => {
    img.style.opacity = "1";
  });
});

/* ===========================
   Prevent Form Resubmit
=========================== */

if (window.history.replaceState) {
  window.history.replaceState(
    null,

    null,

    window.location.href,
  );
}
