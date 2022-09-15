const saveCartItems = () => localStorage.getItem('cartItems');

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
