/*======================================================
    SportsZone
    File: js/order-success.js
======================================================*/

/* ===========================
   DOM Element
=========================== */

const orderDetails = document.getElementById("order-details");

/* ===========================
   Render Order
=========================== */

function renderOrder() {
  if (!orderDetails) return;

  const order = JSON.parse(localStorage.getItem("sportszone_last_order"));

  if (!order) {
    orderDetails.innerHTML = `

            <p>

                No recent order found.

            </p>

        `;

    return;
  }

  orderDetails.innerHTML = `

        <p>

            <strong>Customer :</strong>

            ${order.customer.name}

        </p>

        <p>

            <strong>Email :</strong>

            ${order.customer.email}

        </p>

        <p>

            <strong>Phone :</strong>

            ${order.customer.phone}

        </p>

        <p>

            <strong>Address :</strong>

            ${order.customer.address},

            ${order.customer.city},

            ${order.customer.state}

            - ${order.customer.pincode}

        </p>

        <p>

            <strong>Payment Method :</strong>

            ${order.customer.payment}

        </p>

        <p>

            <strong>Total Amount :</strong>

            ${formatPrice(order.total)}

        </p>

        <p>

            <strong>Order Date :</strong>

            ${order.date}

        </p>

    `;
}

/* ===========================
   Initialize
=========================== */

document.addEventListener(
  "DOMContentLoaded",

  renderOrder,
);
