/*======================================================
    SportsZone
    File: js/about.js
======================================================*/

/* ===========================
   Statistics Counter
=========================== */

function animateCounters() {
  const counters = document.querySelectorAll(".stat-card h2");

  counters.forEach((counter) => {
    const text = counter.textContent;

    const target = parseInt(text);

    if (isNaN(target)) return;

    let current = 0;

    const increment = Math.ceil(target / 80);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        clearInterval(timer);

        counter.textContent = text;
      } else {
        counter.textContent = current + "+";
      }
    }, 20);
  });
}

/* ===========================
   CTA Button
=========================== */

const ctaButton = document.querySelector(".cta-btn");

if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    showToast("Redirecting to Products...");
  });
}

/* ===========================
   Initialize
=========================== */

document.addEventListener(
  "DOMContentLoaded",

  animateCounters,
);
