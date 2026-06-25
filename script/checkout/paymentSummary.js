import {cart} from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { products } from "../../data/products.js";
import { countCartQuantity } from "../amazon.js";
export function renderPaymentSummary() {
  let price = 0;
  let shippingCost = 0;
  let tax =0;
  let paymentSummary = '';

  function calculations () {
    cart.forEach(cartItem => {
    deliveryOptions.forEach((option)=>{
      totalShippingCost(cartItem, option);
    });
    products.forEach(product => {
    totalPrice(cartItem, product);
  }); 
});
  totalTax();
  }
  
  function totalPrice(cartItem, product) {
  if (cartItem.id === product.id){
      price += (product.priceCents * cartItem.quantity);
  } 
  }

  function totalShippingCost(cartItem,  option) {
    if (option.id===cartItem.deliveryOptionId) {
      shippingCost+= (option.shippingCost);
    }
  }
  function totalTax() {
    tax = (price + shippingCost)/10;
  }

 function finalRendring() {
  calculations();
  document.querySelector('.js-payment-summary-row-1 :nth-child(1)').textContent= `Items (${countCartQuantity()}):`
  document.querySelector('.js-total-price').textContent= `${(price/100).toFixed(2)}`;
  document.querySelector('.js-shipping-cost').textContent= `${(shippingCost/100).toFixed(2)}`;
  document.querySelector('.js-total-value-before-tax').textContent= `${((price+shippingCost)/100).toFixed(2)}`;
  document.querySelector('.js-tax').textContent= `${((tax)/100).toFixed(2)}`;
  document.querySelector('.js-total-value-after-tax').textContent= `${((price+shippingCost+tax)/100).toFixed(2)}`;
 }
 
 finalRendring();
  }