const sidebar = document.querySelector('.sidebar');
const sidebarContent = document.querySelector('.sidebar-content');
const cartButton = document.querySelector('.cart-button');
const closeButton = document.querySelector('.sidebar-close-button');
const productControls = document.querySelectorAll('.product-controls');
const productControlsIcons = document.querySelectorAll(
  '.product-controls-icons'
);
const allProductsButton = document.querySelector('.featured-section-button');
const shopNowButton = document.querySelector('.hero-button');
const searchButtons = document.querySelectorAll('.search');
const addToCartButtons = document.querySelectorAll('.cart');
const productNames = document.querySelectorAll('.product-name');
const productPrices = document.querySelectorAll('.product-price');
const productImage = document.querySelector('.product-image');
const cartProductName = document.querySelector('.cart-product-name');
const cartProductPrice = document.querySelector('.cart-product-price');

// Event Listeners
cartButton.addEventListener('click', () => {
  showSidebar();
});

closeButton.addEventListener('click', () => {
  hideSidebar();
});

for (const productControl of productControls) {
  productControl.addEventListener('mouseover', () => {
    for (const productControlsIcon of productControlsIcons) {
      productControlsIcon.classList.add('show-product-controls-icons');
    }
  });
  productControl.addEventListener('mouseout', () => {
    for (const productControlsIcon of productControlsIcons) {
      productControlsIcon.classList.remove('show-product-controls-icons');
    }
  });
}

allProductsButton.addEventListener('click', () => {
  location.href = '/pages/products.html';
});

shopNowButton.addEventListener('click', () => {
  location.href = '/pages/products.html';
});

searchButtons.forEach((element) => {
  element.addEventListener('click', () => {
    location.href = '/pages/productDetails.html';
  });
});

addToCartButtons.forEach((element) => {
  element.addEventListener('click', () => {
    showSidebar();
    productNames.forEach((element) => {
      cartProductName.innerHTML = `${element.innerHTML}`;
    });
    productPrices.forEach((element) => {
      cartProductPrice.innerHTML = `${element.innerHTML}`;
    });

    // cartProductName.innerHTML = `${productName.innerHTML}`;
    // cartProductPrice.innerHTML = `${productPrice.innerHTML}`;
  });
});

// Functions
function showSidebar() {
  sidebar.classList.add('show-sidebar');
  sidebarContent.style.display = 'grid';
}

function hideSidebar() {
  sidebar.classList.remove('show-sidebar');
  sidebarContent.style.display = 'none';
}

export { showSidebar, hideSidebar };
