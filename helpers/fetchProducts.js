const fetchProducts = async (item) => {
  const endline = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const request = await fetch(endline);
  const response = await request.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
