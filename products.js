
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


   

  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.dataset.id);
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const image = button.dataset.image;

      if (!id || !name || !price || !image) {
        alert("Product data is missing.");
        return;
      }

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find((item) => item.id === id);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id, name, price, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
  });
});


const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.product-card');
  const noResults = document.getElementById('no-results');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let matchCount = 0;

    productCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();

      if (title.includes(searchTerm)) {
        card.classList.remove('hidden');
        card.classList.add('show-result'); 
        matchCount++;
      } else {
        card.classList.remove('show-result');
        card.classList.add('hidden');
      }
    });

    noResults.style.display = matchCount === 0 ? 'block' : 'none';
});