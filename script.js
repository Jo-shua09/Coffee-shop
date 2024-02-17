const navbar = document.querySelector(`.navBar`);
const menuBtn = document.querySelector(`#menu-btn`);

const cartContainer = document.querySelector(`.cart-items-container`);
const cartBtn = document.querySelector(`#cart-btn`);

const searchInput = document.querySelector(`.search-form`);
const searchBtn = document.querySelector(`#search-btn`);

// To show the navbar items
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle(`showNavbar`);
  searchInput.classList.remove(`showSearch`);
  cartContainer.classList.remove(`showCart`);
});

// To show the cart items
cartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle(`showCart`);
  navbar.classList.remove(`showNavbar`);
  searchInput.classList.remove(`showSearch`);
});

// To show the search input
searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle(`showSearch`);
  navbar.classList.remove(`showNavbar`);
  cartContainer.classList.remove(`showCart`);
});

window.onscroll = () => {
  navbar.classList.remove(`showNavbar`);
  cartContainer.classList.remove(`showCart`);
  searchInput.classList.remove(`showSearch`);
};
