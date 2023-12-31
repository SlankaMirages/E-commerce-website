export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [];
}


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart (productId){
  let matchingItem;

  cart.forEach((cartItem) => {
   if (productId === cartItem.productId) {
     matchingItem = cartItem;
   }
  });

  let selectedNumber = document.querySelector(`.JS-quantity-${productId}`);
  let quantity = Number(selectedNumber.value);

  if (matchingItem){
   matchingItem.quantity += quantity;
  } else {
   cart.push({
     productId,
     quantity
   });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem)=>{
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}