service = document.getElementById('services');
product = document.getElementById('products');
cart = document.getElementById('cart')

function goToP(){
  service.style.display = 'none';
  cart.style.display = 'none';
  product.style.display = 'block';
}
function goToS(){
  product.style.display = 'none';
  cart.style.display = 'none';
  service.style.display = 'block';
}
function goToC(){
  service.style.display = 'none';
  product.style.display = 'none';
  cart.style.display = 'block';
}

const products = [
  { id: 1, name: 'Product A', price: 1500, category: 'Category X', imageUrl: 'p1.png' },
  { id: 2, name: 'Product B', price: 3000, category: 'Category Y', imageUrl: 'p1.png' },
  { id: 3, name: 'Product C', price: 6000, category: 'Category Z', imageUrl: 'p1.png' },
  { id: 4, name: 'Product K', price: 6000, category: 'Category O', imageUrl: 'p1.png' },
  { id: 5, name: 'Product S', price: 6000, category: 'Category P', imageUrl: 'p1.png' },
];

// Sample service data (You can replace this with actual data fetched from the server)
const services = [
  { id: 1, name: 'Service X', price: 2000, category: 'Category A', imageUrl: 's1.png' },
  { id: 2, name: 'Service Y', price: 5000, category: 'Category B', imageUrl: 's1.png' },
  { id: 3, name: 'Service Z', price: 10000, category: 'Category C', imageUrl: 's1.png' },
  { id: 4, name: 'Product O', price: 6000, category: 'Category K', imageUrl: 's1.png' },
  { id: 5, name: 'Product P', price: 6000, category: 'Category S', imageUrl: 's1.png' },
];

// Function to create product list items with card view
const createProductListItem = (product) => {
  return `
    <li class="card">
      <img src="${product.imageUrl}" alt="${product.name}">
      <div class="card-content">
        <span>${product.name}</span>
        <span>Price: $${product.price}</span>
        <button class="add-to-cart" data-id="${product.id}" data-type="product">Add to Cart</button>
      </div>
    </li>
  `;
};

// Function to create service list items with card view
const createServiceListItem = (service) => {
  return `
    <li class="card">
      <img src="${service.imageUrl}" alt="${service.name}">
      <div class="card-content">
        <span>${service.name}</span>
        <span>Price: $${service.price}</span>
        <button class="add-to-cart" data-id="${service.id}" data-type="service">Add to Cart</button>
      </div>
    </li>
  `;
};
  
// Function to render products and services on the page
const renderProductsAndServices = () => {
  const productsList = document.querySelector('#products ul');
  const servicesList = document.querySelector('#services ul');

  // Create a string to store the list items
  let productsHTML = '';
  let servicesHTML = '';

  products.forEach((product) => {
    // Append the list item HTML to the productsHTML string
    productsHTML += createProductListItem(product);
  });

  services.forEach((service) => {
    // Append the list item HTML to the servicesHTML string
    servicesHTML += createServiceListItem(service);
  });

  // Set the innerHTML of the lists with the generated HTML strings
  productsList.innerHTML = productsHTML;
  servicesList.innerHTML = servicesHTML;
};
  
// Array to store selected items in the cart
const cartItems = [];



const increaseQuantity = (id, type) => {
  // Find the item in the cart based on its ID and type
  const cartItem = cartItems.find(item => item.id === parseInt(id) && item.type === type);

  if (cartItem) {
    // Increase the quantity by 1
    cartItem.quantity++;
  }

  // Update and display the cart items
  updateCart();
};

// Function to handle decreasing the quantity of an item in the cart
const decreaseQuantity = (id, type) => {
  // Find the item in the cart based on its ID and type
  const cartItem = cartItems.find(item => item.id === parseInt(id) && item.type === type);

  if (cartItem && cartItem.quantity > 1) {
    // Decrease the quantity by 1, but keep it >= 1
    cartItem.quantity--;
  }

  // Update and display the cart items
  updateCart();
};

const calculateCartTotal = () => {
  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.quantity;
  });
  return total;
};

const updateCart = () => {
  const cartItemsList = document.querySelector('#cart-items');
  cartItemsList.innerHTML = '';

  cartItems.forEach(item => {
    const cartItemHTML = `
      <li class="card">
        <img src="${item.imageUrl}" alt="${item.name}">
        <div class="card-content">
          <span>${item.name}</span>
          <span>Price: $${item.price}</span>
          <div class="quantity-container">
            <button class="decrease-quantity" data-id="${item.id}" data-type="${item.type}" ${item.quantity === 1 ? 'disabled' : ''}>-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase-quantity" data-id="${item.id}" data-type="${item.type}">+</button>
          </div>
        </div>
      </li>
    `;
    cartItemsList.innerHTML += cartItemHTML;
  });

  const totalAmount = calculateCartTotal();
  const totalAmountDisplay = document.getElementById('total-amount');
  totalAmountDisplay.style.display = 'inline';
  totalAmountDisplay.textContent = `Total Amount: $${totalAmount}`;

  // Enable or disable the checkout button based on cartItems length
  const checkoutButton = document.getElementById('checkout-button');
  checkoutButton.disabled = cartItems.length === 0;

  // Add event listeners to the "+" and "-" buttons for changing quantity
  const increaseQuantityButtons = document.querySelectorAll('.increase-quantity');
  const decreaseQuantityButtons = document.querySelectorAll('.decrease-quantity');

  increaseQuantityButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      const type = button.getAttribute('data-type');
      increaseQuantity(id, type);
    });
  });

  decreaseQuantityButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      const type = button.getAttribute('data-type');
      decreaseQuantity(id, type);
    });
  });
};



const addToCart = (id, type) => {
  // Find the selected item based on its ID and type (product or service)
  const selectedItem = type === 'product' ? products.find(item => item.id === parseInt(id)) : services.find(item => item.id === parseInt(id));

  // Check if the item is already in the cart
  const itemInCart = cartItems.find(item => item.id === parseInt(id) && item.type === type);

  if (itemInCart) {
    // If the item is already in the cart, increase its quantity by 1
    itemInCart.quantity++;
  } else {
    // If the item is not in the cart, add it to the cart array with a quantity of 1
    const cartItem = {
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      imageUrl: selectedItem.imageUrl,
      type,
      quantity: 1,
    };
    cartItems.push(cartItem);
  }

  // Update and display the cart items
  updateCart();
};




  
  // Add event listeners to the buttons
  document.addEventListener('DOMContentLoaded', () => {
    renderProductsAndServices();
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const type = button.getAttribute('data-type');
        addToCart(id, type);
      });
    });
  });
  
  