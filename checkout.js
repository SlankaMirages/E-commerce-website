import { products, trendingProducts } from "../E-commerce-website/Product.js";
import { cart, addToCart, removeFromCart, calculateCartQuantity, updateQuantity } from "../E-commerce-website/cart.js";


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

  const cartQuantity = calculateCartQuantity();
  document.querySelector('.JS-item-quantity')
  .innerHTML = `${cartQuantity} Items`;  
}


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


let checkoutItemsHTML ='';

cart.forEach((cartItem)=>{
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product)=>{
    if (product.id === productId){
      matchingProduct = product;
    };
  })

  trendingProducts.forEach((product)=>{
    if (product.id === productId){
      matchingProduct = product;
    };
  })
  checkoutItemsHTML += `
    <div class="product-details product-details-${matchingProduct.id}">
        <img class="checkout-image" src="${matchingProduct.Image}"  alt="${matchingProduct.name}">
        <div class="details">
          <p class="Price">${matchingProduct.name}</p>
          <p class="Price">GHS ${matchingProduct.price}</p>
          <p class="Price quantity-label">Quantity: <span class="js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span></p>
          <span class="JS-update update update-quantity-link" data-product-id=${matchingProduct.id}>Update</span>
          <input class="quantity-input js-quantity-input-${matchingProduct.id}">
          <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
          <span class="JS-delete delete" data-product-id=${matchingProduct.id}>Delete</span>
        </div> 
    </div>`;
})

  document.querySelector('.js-cart-item-container')
      .innerHTML = checkoutItemsHTML;

      document.querySelectorAll('.JS-delete')
      .forEach((link) =>{
        link.addEventListener('click', () =>{
        const  productId = link.dataset.productId;
          removeFromCart(productId);
          const container = document.querySelector(`.product-details-${productId}`);
          container.remove();
          updateCartQuantity();
        });
      });

      updateCartQuantity();

      document.querySelectorAll('.JS-update')
      .forEach((link) =>{
        link.addEventListener('click', () =>{
        const  productId = link.dataset.productId;

        const container = document.querySelector(`.product-details-${productId}`);
        container.classList.add('is-editing-quantity');
        });
      });  
      
      document.querySelectorAll('.js-save-link')
      .forEach((link) => {
      link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      const container = document.querySelector(`.product-details-${productId}`);
      container.classList.remove('is-editing-quantity');

      const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
      const newQuantity = Number(quantityInput.value);
      updateQuantity(productId, newQuantity);
      const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
      quantityLabel.innerHTML = newQuantity;

      updateCartQuantity();
    });
  });
