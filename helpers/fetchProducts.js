const produtos = 'computador';
const fetchProducts = async (produto) => {
  const endline = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  const request = await fetch(endline);
  const response = await request.json();
  return response;
};

fetchProducts(produtos);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
