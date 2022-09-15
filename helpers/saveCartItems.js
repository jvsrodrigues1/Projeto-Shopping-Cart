const saveCartItems = (cartItem) => {
  const currentCartItems = localStorage.getItem('cartItems') || [];
  const fixedCartItems = Array.isArray(currentCartItems) ? currentCartItems : [currentCartItems];
  localStorage.setItem('cartItems', [...fixedCartItems, cartItem]);
 };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}