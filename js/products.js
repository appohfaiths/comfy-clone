import { showSidebar, hideSidebar } from './index.js';

const cartButton = document.querySelector('.cart-button');
const closeButton = document.querySelector('.sidebar-close-button');
const searchInput = document.querySelector('.search-input');
const productNamesList = document.querySelectorAll('.product-name');
const productNames = [...productNamesList];

cartButton.addEventListener('click', () => {
  showSidebar();
});

closeButton.addEventListener('click', () => {
  hideSidebar();
});

searchInput.addEventListener('keydown', (e) => {
  console.log(e);
  const searchValue = e.key;
  console.log(searchValue);
  productNames.forEach((element) => {
    // const firstChar = element.innerHTML.charAt(0);
    // firstChar === searchValue ? console.log(element) : console.log('not found');

    if (!element.innerHTML.includes(searchValue)) {
      element.parentElement.style.display = 'none';
    }
  });
});
