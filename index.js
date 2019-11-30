var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newCartItem = {itemName:item, itemPrice:Math.floor(Math.random()*100)}
 cart.push(newCartItem);
 return `${cart[cart.length-1].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
//Initial statement on Cart Contents return string
    let cartContents = `In your cart, you have`
    for(let i=0; i < cart.length; i++){
//Add space, item and item price
//cartContents = `${cartContents} ${cart[i].itemName} at \$${cart[i].itemPrice}`
//When reaching the last entr in the Cart, end with a period.
      if(i === cart.length-1){
        cartContents = `${cartContents} and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
      }
//If this is not the last entry of the cart, concatenate a comma.
      else{
        cartContents = `${cartContents} ${cart[i].itemName} at \$${cart[i].itemPrice},`
      }
    }
    return cartContents;
  }
  else{
    return `Your shopping cart is empty.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
