import Ember from 'ember';

export function cartItems(params/*, hash*/) {
  var shoppingCart = params[0];
  // console.log(params[0]);
  if (shoppingCart.length === 0) {
    return "There are no items in your cart"
  } else {
    return "You have already " + shoppingCart.length + " items!";
  }
}

export default Ember.Helper.helper(cartItems);
