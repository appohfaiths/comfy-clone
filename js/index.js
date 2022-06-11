const sidebar = document.querySelector('.sidebar');
const cartButton = document.querySelector('.cart-button');
const closeButton = document.querySelector('.sidebar-close-button');
const productControls = document.querySelectorAll('.product-controls');
const productControlsIcons = document.querySelectorAll(
  '.product-controls-icons'
);

// Event Listeners
cartButton.addEventListener('click', () => {
  showSidebar();
});

closeButton.addEventListener('click', () => {
  hideSidebar();
});

for (const productControl of productControls) {
  productControl.addEventListener('mouseover', () => {
    showProductControlsIcons();
  });
  productControl.addEventListener('mouseout', () => {
    hideProductControlsIcons();
  });
}

// Functions
const showSidebar = () => {
  sidebar.classList.add('show-sidebar');
};

const hideSidebar = () => {
  sidebar.classList.remove('show-sidebar');
};

for (const productControlsIcon of productControlsIcons) {
  function showProductControlsIcons() {
    productControlsIcon.classList.add('show-product-controls-icons');
  }

  function hideProductControlsIcons() {
    productControlsIcon.classList.remove('show-product-controls-icons');
  }
}
