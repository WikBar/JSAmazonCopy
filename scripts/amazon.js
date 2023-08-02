import  { totalQuantity, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { fixedPrice } from '../data/utils.js';
let htmlProducts = '';

products.forEach((product)=>{
    const stars=product.rating.stars*10;

    htmlProducts += `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines" data-product-name="${product.name}">
    ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${stars}.png">
      <div class="product-rating-count link-primary">
      ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${fixedPrice(product.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select class="js-product-quantity-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${product.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="js-add-to-cart add-to-cart-button button-primary
    " data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`
})

document.querySelector(".js-products-grid").innerHTML=htmlProducts;



document.querySelector(".js-cart-quantity").innerHTML=totalQuantity()>0?totalQuantity():null;



          
addToCart();
