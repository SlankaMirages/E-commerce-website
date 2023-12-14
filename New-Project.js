import { products, trendingProducts, } from "../E-commerce-website/Product.js";
import { cart, addToCart,} from "../E-commerce-website/cart.js";

let productsHTML = '';

products.forEach((product) =>{
  productsHTML += `
  <div class="trending-box">
  <div class="ad-header">${product.name}</div>
  <img class="item-picture" src="${product.Image}">
  <p class="Price">GHS ${product.price}</p>
  <select class="quantity  JS-quantity-${product.id}">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  </select>
  <div class="added-message JS-added-message-${product.id}"><ion-icon name="checkmark-circle"></ion-icon>Added</div>
  <button class="trending-button JS-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
  </div>
  `;
})

document.querySelector('.JS-page')
.innerHTML = productsHTML;

let trendingProductsHTML ='';

trendingProducts.forEach((product) =>{
  trendingProductsHTML += `
  <div class="trending-box">
  <div class="ad-header">${product.name}</div>
  <img class="item-picture" src="${product.Image}">
  <p class="Price">GHS ${product.price}</p>
  <select class="quantity  JS-quantity-${product.id}">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  </select>
  <div class="added-message JS-added-message-${product.id}"><ion-icon name="checkmark-circle"></ion-icon>Added</div>
  <button class="trending-button JS-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
  </div>
  `;
})

document.querySelector('.JS-trending-products')
.innerHTML = trendingProductsHTML;

function updateCartQuantity(){
  let cartQuantity = 0;

  cart.forEach((cartItem) =>{
   cartQuantity += cartItem.quantity;
  });

  document.querySelector('.JS-cart-quantity')
  .innerHTML = cartQuantity;
}

updateCartQuantity();

function addMessage(productId){
  let addedMessageTimeoutId;
  const addedMessage = document.querySelector(`.JS-added-message-${productId}`);

  addedMessage.classList.add('added-message-visible');

 if (addedMessageTimeoutId){
     clearTimeout(addedMessageTimeoutId);
   }

 const timeoutId = setTimeout(()=>{
   addedMessage.classList.remove('added-message-visible'); 
  }, 2000);

  addedMessageTimeoutId = timeoutId;
}

document.querySelectorAll('.JS-add-to-cart')
.forEach((button) =>{
  
  button.addEventListener('click', () =>{

   const {productId} = button.dataset;

  addToCart(productId);
  updateCartQuantity();
  addMessage(productId);

  });
});