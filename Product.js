export function getProduct(productId){
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

  return matchingProduct;
}

export const products = [{
  id : 'P1',
  name : 'Men T-Shirt',
  Image : 'images/New-Design-Customized-Polo-Shirt-For-Men.jpg',
  price : '250',

}, {
  id : 'P2',
  name : 'Iphone 12 pro max',
  Image : 'images/iphone 12 pro max.jpg',
  price : '5000' 

},{
  id : 'P3',
  name : 'Fifa-23 Ultimate Edition',
  Image : 'images/fifa-23-ultimate-edition.jpg',
  price : '700' 

},{
  id : 'P4',
  name : 'Dell Gaming Laptop',
  Image : 'images/Dell Laptop.avif',
  price : '8500' 

},{id : 'P5',
  name : 'Home Furniture Wooden',
  Image : 'images/Home Furniture Wooden.jpg',
  price : '2500' 

},{
  id : 'P6',
  name : 'Iphone 14 pro max Gold',
  Image : 'images/iphone-14-pro-max-gold.jpg',
  price : '5500' 

},{
  id : 'P7',
  name : 'Hyundai-Grand-i10-Nios',
  Image : 'images/Hyundai-Grand-i10-Nios.jpg',
  price : '75000' 

},{
  id : 'P8',
  name : 'LG washing machine',
  Image : 'images/LG washing machine.webp',
  price : '700' 

},{
  id : 'P9',
  name : 'Philips QLED 60" TV',
  Image : 'images/philip tv.webp',
  price : '15000' 

},{
  id : 'P10',
  name : 'Cooking Pots Non-Stick',
  Image : 'images/Non-stick.jpg',
  price : '650' 

}];

export const trendingProducts = [{
  id : 'TP1',
  name : 'Men T-Shirt',
  Image : 'images/New-Design-Customized-Polo-Shirt-For-Men.jpg',
  price : '250',

}, {
  id : 'TP2',
  name : 'Iphone 12 pro max',
  Image : 'images/iphone 12 pro max.jpg',
  price : '5000' 

},{
  id : 'TP3',
  name : 'Fifa-23 Ultimate Edition',
  Image : 'images/fifa-23-ultimate-edition.jpg',
  price : '700' 

}]
