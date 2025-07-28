function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  cartContainer.innerHTML = "";

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price * item.quantity;

    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-price">$${item.price} x ${item.quantity}</p>
        <div class="quantity-controls">
          <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
          <span class="qty-count">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
        </div>
        <button onclick="removeItem(${index})" class="remove-button">
          <i class="fas fa-trash-alt"></i> Remove
        </button>
      </div>
    `;
    cartContainer.appendChild(itemEl);
  });

  totalPriceEl.innerText = `$${total.toFixed(2)}`;
}


function changeQty(index, delta) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity + delta <= 0) return;
  cart[index].quantity += delta;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
