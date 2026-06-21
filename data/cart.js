export let cart = JSON.parse(localStorage.getItem("cart")) ||[];

export function addtocart(productId,matchingItem, selectedQuantity) {
  cart.forEach((item) => {
          if (productId === item.id) {
            matchingItem = item;
          }
        });
        if (matchingItem) {
            matchingItem.quantity += selectedQuantity;
            console.log(typeof matchingItem.quantity);
            
            localStorage.setItem('cart', JSON.stringify(cart));
        }  
        else {
          cart.push({
            id: productId,
            quantity: selectedQuantity,
          });
          localStorage.setItem('cart', JSON.stringify(cart));
        }
}


