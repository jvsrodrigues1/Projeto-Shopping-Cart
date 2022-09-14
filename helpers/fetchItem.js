const fetchItem = async (items) => {
  const endline = `https://api.mercadolibre.com/items/${items}`;
  const request = await fetch(endline);
  const response = await request.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
