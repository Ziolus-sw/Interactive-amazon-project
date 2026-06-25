import {cart,addtocart} from "../data/cart.js";
import {products} from "../data/products.js";



function updateCartQuantity() {
  let cartQuantity=0 ;
        cart.forEach((item) => {
            cartQuantity += Number(item.quantity);
          });
    
        document.querySelector(".JS-cart-quantity").textContent =
          `${Number(cartQuantity)}`;       
}

export function countCartQuantity() {
  let cartQuantity=0 ;
        cart.forEach((item) => {
            cartQuantity += Number(item.quantity);
          });
          return Number(cartQuantity);      
}

document.addEventListener("DOMContentLoaded", () => {


  let producthtml = "";
  products.forEach((product) => {
    producthtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.counts}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div> 

          <div class="product-quantity-container   add-to-cart-button JS-product-quantity-container-${product.id}">
            <select>
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

          <div class="added-to-cart JS-added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary 
          js-addtocart-button-primary"              
          
          data-product-id= "${product.id}">
            Add to Cart
          </button>
</div>
`;
  });

  document.querySelector(".js-product-grid").innerHTML = producthtml;

  document
    .querySelectorAll(".product-container")
    .forEach((productContainer, PCindex) => {

      let clickCount = 0;
      let settimeoutId;
      productContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".button-primary");
        if (!btn) return;

        document
          .querySelectorAll(`.JS-added-to-cart`)
          .forEach((addedToCartBtn, ATCindex) => {
            if (ATCindex === PCindex) {
              console.log(PCindex, ATCindex);
              clickCount += 1;
              if (clickCount > 1) {
                clearTimeout(settimeoutId);
              }
              //make the opactity of the added to cart button corresponding to the product container 100%
              addedToCartBtn.style.opacity = "100%";

              // addinf the set time out fading funtiion on the same
              settimeoutId = setTimeout(() => {
                // addedToCartBtn.style.opacity = "0%";
                 let opacity = 100;
                function decreaseOpacity() {
                  opacity-=20;
                  if (opacity>0) {
                   addedToCartBtn.style.opacity =`${opacity}%`;
                    requestAnimationFrame(decreaseOpacity);
                  }
                  else{
                    addedToCartBtn.style.opacity = "0%";
                  }
                  return;
                }
                requestAnimationFrame(decreaseOpacity);
              }, 1000);
            }
               
          });
      });
    });

  document
    .querySelectorAll(".js-addtocart-button-primary")
    .forEach((button) => {
      button.addEventListener("click", () => {
        let productId = button.dataset.productId;
        let matchingItem;
        let selectedQuantity= Number(document.querySelector(`.JS-product-quantity-container-${productId} select`).value);
        console.log(typeof selectedQuantity, selectedQuantity);

        addtocart(productId,matchingItem,selectedQuantity);
        updateCartQuantity();  
      });
    });

    updateCartQuantity();
});
