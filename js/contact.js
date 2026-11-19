/*======================================================
    SportsZone
    File: js/contact.js
======================================================*/

/* ===========================
   DOM Elements
=========================== */

const contactForm = document.getElementById("contact-form");

const faqQuestions = document.querySelectorAll(".faq-question");

/* ===========================
   Contact Form
=========================== */

function submitContactForm(event) {
  event.preventDefault();

  const message = {
    name: document.getElementById("contact-name").value.trim(),

    email: document.getElementById("contact-email").value.trim(),

    subject: document.getElementById("contact-subject").value.trim(),

    message: document.getElementById("contact-message").value.trim(),

    date: new Date().toLocaleString(),
  };

  const messages =
    JSON.parse(localStorage.getItem("sportszone_messages")) || [];

  messages.push(message);

  localStorage.setItem(
    "sportszone_messages",

    JSON.stringify(messages),
  );

  showToast("Message sent successfully.");

  contactForm.reset();
}

/* ===========================
   FAQ Accordion
=========================== */

faqQuestions.forEach((question) => {
  question.addEventListener(
    "click",

    () => {
      const answer = question.nextElementSibling;

      const icon = question.querySelector("i");

      document

        .querySelectorAll(".faq-answer")

        .forEach((item) => {
          if (item !== answer) {
            item.style.display = "none";
          }
        });

      document

        .querySelectorAll(".faq-question i")

        .forEach((item) => {
          if (item !== icon) {
            item.classList.remove("fa-chevron-up");

            item.classList.add("fa-chevron-down");
          }
        });

      if (answer.style.display === "block") {
        answer.style.display = "none";

        icon.classList.remove("fa-chevron-up");

        icon.classList.add("fa-chevron-down");
      } else {
        answer.style.display = "block";

        icon.classList.remove("fa-chevron-down");

        icon.classList.add("fa-chevron-up");
      }
    },
  );
});

/* ===========================
   Events
=========================== */

if (contactForm) {
  contactForm.addEventListener(
    "submit",

    submitContactForm,
  );
}
