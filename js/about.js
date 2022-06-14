import { showSidebar, hideSidebar } from './index.js';

const cartButton = document.querySelector('.cart-button');
const closeButton = document.querySelector('.sidebar-close-button');

cartButton.addEventListener('click', () => {
  showSidebar();
});

closeButton.addEventListener('click', () => {
  hideSidebar();
});
