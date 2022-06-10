const sidebar = document.querySelector('.sidebar');
const cartButton = document.querySelector('.cart-button');
const closeButton = document.querySelector('.sidebar-close-button');

cartButton.addEventListener('click', () => {
  showSidebar();
});

closeButton.addEventListener('click', () => {
  hideSidebar();
});

const showSidebar = () => {
  sidebar.classList.add('show');
};

const hideSidebar = () => {
  sidebar.classList.remove('show');
};
