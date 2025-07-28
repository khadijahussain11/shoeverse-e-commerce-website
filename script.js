// document.addEventListener("DOMContentLoaded", function () {
//   const menuIcon = document.getElementById('menuIcon');
//   const navLinks = document.getElementById('navLinks');

//   if (menuIcon && navLinks) {
//     menuIcon.addEventListener('click', () => {
//       console.log("Menu icon clicked");
//       navLinks.classList.toggle('show');
//     });
//   } else {
//     console.warn('menuIcon or navLinks not found in the DOM');
//   }
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.getElementById("menuIcon");
//   const navLinks = document.getElementById("navLinks");

//   menuIcon.addEventListener("click", () => {
//     navLinks.classList.toggle("show");
//   });});
 /* const buttons = document.querySelectorAll(".add-to-cart");

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
// });*/
