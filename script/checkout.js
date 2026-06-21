import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { countCartQuantity } from "../script/amazon.js";

document.addEventListener("DOMContentLoaded", () => {
  let productImage = "";
  let productName = "";
  let productQuantity;
  let productPrice;
  let orderSummary = "";
  let productId = "";

  function mapTheCartProduct() {
    cart.forEach((cartItem) => {
      products.forEach((productItem) => {
        if (cartItem.id === productItem.id) {
          productId = cartItem.id;
          productImage = productItem.image;
          productName = productItem.name;
          productQuantity = cartItem.quantity;
          productPrice = productItem.priceCents;
          console.log(
            productId,
            productImage,
            productName,
            productQuantity,
            productPrice,
          );

          orderSummary += `<div class="cart-item-container js-cart-item-container" data-product-id ="${productId}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${productImage}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${productName}
                </div>
                <div class="product-price">
                  $${(productPrice / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${productQuantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-cart-quantity-btn">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-item-btn">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
         <div class="cart-update-container">
    
          <input id="quantity" type="range" name="cart-quantity" id="cart-quantity" value="${productQuantity}" step="1" min="0" max="20" oninput="result.value = quantity.value">
          <output for="quantity" id="result"></output>
         </div>
          </div>`;
        }
      });
    });
  }

  mapTheCartProduct();
  document.querySelector(".js-order-summary").innerHTML = orderSummary;

  console.log(document.querySelector(".cart-item-container"));

  function checkoutItems() {
    document.querySelector(".js-checkout-items").textContent =
      `${countCartQuantity()} Items`;
  }

  checkoutItems();

  let clickcount = 0;

  document.querySelectorAll(".js-cart-item-container").forEach((cartItems) => {
    cartItems
      .querySelector(".js-update-cart-quantity-btn")
      .addEventListener("click", () => {
        clickcount++;
        if (clickcount % 2 == 1) {
          updateCartQuantity(cartItems);
        } else {
          cartItems.querySelector(".cart-update-container").style.display =
            "none";
        }
      });
  });

  function updateCartQuantity(cartItems) {
    let updateSlider = cartItems.querySelector(".cart-update-container");
    updateSlider.style.display = "flex";
    (updateSlider.querySelector('input[type ="range"]'),
      addEventListener("input", () => {
        cartItems.querySelector(".quantity-label").textContent = String(
          updateSlider.querySelector("#quantity").value,
        );

        let productId = "";
        productId = cartItems.dataset.productId;
        console.log(productId);

        cart.forEach((item) => {
          if (item.id === productId) {
            item.quantity = updateSlider.querySelector("#quantity").value;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        checkoutItems();
        console.log(cart);
      }));
  }

  function deleteCartItem() {
    document
      .querySelectorAll(".js-cart-item-container")
      .forEach((cartItem, index) => {
        cartItem
          .querySelector(".js-delete-item-btn")
          .addEventListener("click", () => {
            console.log(cart);
            cart.splice(index, 1);
            console.log(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            orderSummary = "";
            mapTheCartProduct();
            document.querySelector(".js-order-summary").innerHTML =
              orderSummary;
            checkoutItems();
            // cart.forEach((cartObject, index)=>{
            // if (cartObject.id=== cartItem.dataset.productId){
            // }
            // })
              deleteCartItem();
          });
      });
  }

  deleteCartItem();
});
