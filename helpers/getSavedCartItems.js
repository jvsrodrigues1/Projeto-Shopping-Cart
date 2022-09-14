const getSavedCartItems = (html) => {
  localStorage.setItem('cartItems', html);
 };
 
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
