/*======================================================
    SportsZone
    File: js/categories.js
======================================================*/

/* ===========================
   Categories Data
=========================== */

const categories = [
  {
    name: "Cricket",
    image: "images/categories/cricket.jpg",
    description:
      "Explore premium cricket bats, balls, gloves, helmets and accessories.",
  },

  {
    name: "Football",
    image: "images/categories/football.jpg",
    description:
      "Find footballs, shoes, goalkeeping gloves and training equipment.",
  },

  {
    name: "Basketball",
    image: "images/categories/basketball.jpg",
    description: "Shop basketballs, hoops, shoes and professional accessories.",
  },

  {
    name: "Badminton",
    image: "images/categories/badminton.jpg",
    description: "Discover rackets, shuttlecocks, shoes and badminton kits.",
  },

  {
    name: "Tennis",
    image: "images/categories/tennis.jpg",
    description: "Browse tennis rackets, balls, apparel and court accessories.",
  },

  {
    name: "Gym Equipment",
    image: "images/categories/gym.jpg",
    description:
      "Buy dumbbells, benches, resistance bands and fitness equipment.",
  },
];

/* ===========================
   Render Categories
=========================== */

function renderCategories() {
  const container = document.getElementById("categories-container");

  if (!container) return;

  container.innerHTML = categories
    .map(
      (category) => `

        <div class="category-card">

            <img
                src="${category.image}"
                alt="${category.name}">

            <div class="category-content">

                <h3>

                    ${category.name}

                </h3>

                <p>

                    ${category.description}

                </p>

                <a
                    href="products.html?category=${encodeURIComponent(category.name)}"
                    class="category-btn">

                    Shop Now

                </a>

            </div>

        </div>

    `,
    )
    .join("");
}

/* ===========================
   Initialize
=========================== */

document.addEventListener(
  "DOMContentLoaded",

  renderCategories,
);
