const fetchProducts = async (produto) => {
  const endline = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  const request = await fetch(endline);
  const response = await request.json();
  return response.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
