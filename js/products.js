import { showSidebar, hideSidebar } from './index.js';

const cartButton = document.querySelector('.cart-button');
const closeButton = document.querySelector('.sidebar-close-button');
const productNamesList = document.querySelectorAll('.product-name');
const productNames = [...productNamesList];

cartButton.addEventListener('click', () => {
  showSidebar();
});

closeButton.addEventListener('click', () => {
  hideSidebar();
});

console.log(productNamesList);
