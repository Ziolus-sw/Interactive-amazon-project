import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { products } from "../../data/products.js";
import { countCartQuantity } from "../amazon.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export function funorderSummary() {
  let productImage = "";
  let productName = "";
  let productQuantity;
  let productPrice;
  let orderSummary = "";
  let productId = "";
  let clickcount = 0;
  function mapTheCartProduct() {
    cart.forEach((cartItem) => {
      products.forEach((productItem) => {
        if (cartItem.id === productItem.id) {
          productId = cartItem.id;
          productImage = productItem.image;
          productName = productItem.name;
          productQuantity = cartItem.quantity;
          productPrice = productItem.priceCents;
          let dateString;
          deliveryOptions.forEach((option) => {
            if (option.id === cartItem.deliveryOptionId) {
              const today = dayjs();
              let deliveryDate = today.add(option.deliveryDays, "days");
              dateString = deliveryDate.format("dddd, MMMM D");
            }
          });
          orderSummary += `<div class="cart-item-container js-cart-item-container" data-product-id="${productId}">
  <div class="delivery-date js-delivery-date">
  Delivery date: ${dateString}
  </div>

  <div class="cart-item-details-grid">
    <img class="product-image" src="${productImage}">

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
      ${deliveryDateHTML(productId, cartItem)}
    </div>


    <div class="cart-update-container">

      <input id="quantity" type="range" name="cart-quantity" id="cart-quantity" value="${productQuantity}" step="1"
        min="1" max="20" oninput="result.value = quantity.value">
      <output for="quantity" id="result"></output>
    </div>
  </div>
</div>`;
        }
      });
    });
  }

  function deliveryDateHTML(productId, cartItem) {
    let html = "";

    deliveryOptions.forEach((option) => {
      const today = dayjs();
      let deliveryDate = today.add(option.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");
      const price =
        option.id === "1"
          ? "FREE"
          : `${(option.shippingCost / 100).toFixed(2)}`;

      const isChecked =
        cartItem.deliveryOptionId === option.id ? "checked" : "";
      html += `<div class="delivery-option JS-delivery-option">
                  <input ${isChecked} type="radio"
                    class="delivery-option-input" value="${dateString}"
                    name="delivery-option-1-${productId}" 
                    data-delivery-option-id="${option.id}"
                    data-product-id="${productId}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${price} - Shipping
                    </div>
                  </div>
                </div>`;
    });
    return html;
  }

  function isRadioSelected() {
    document
      .querySelectorAll(".js-cart-item-container")
      .forEach((cartItem, index) => {
        cartItem
          .querySelectorAll(".JS-delivery-option")
          .forEach((deliveryOption) => {
            deliveryOption.addEventListener("click", (e) => {
              const radioInput = deliveryOption.querySelector("input");

              // radioInput.dispatchEvent(new Event('change'));
              const productId = radioInput.dataset.productId;
              const id = radioInput.dataset.deliveryOptionId;
              console.log(productId, id);

              let product;
              cart.forEach((cartitem) => {
                if (cartitem.id === productId) {
                  product = cartitem;
                  console.log(product);
                }
              });
              product.deliveryOptionId = id;
              funorderSummary();
              renderPaymentSummary();
            });
          });
      });
  }

  function checkoutItems() {
    document.querySelector(".js-checkout-items").textContent =
      `${countCartQuantity()} Items`;
  }

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
        renderPaymentSummary();
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
            renderPaymentSummary();
          });
      });
  }
  function updateSliderManage() {
    document
      .querySelectorAll(".js-cart-item-container")
      .forEach((cartItems) => {
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
  }

  mapTheCartProduct();
  document.querySelector(".js-order-summary").innerHTML = orderSummary;
  checkoutItems();
  updateSliderManage();
  deleteCartItem();
  isRadioSelected();
}
