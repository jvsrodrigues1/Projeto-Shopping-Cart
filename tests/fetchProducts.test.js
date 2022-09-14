require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test ('Executa a função fetchProducts com o argumento "computador" verifica se fetch foi chamada', async ()=>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test ('Executa a função fetchProducts com o argumento "computador" verifica seu endpoint', async ()=>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  test ('Executa a função fetchProducts com o argumento "computador" verifica se é uma estrutura de dados igual ao objeto computadorSearch', async ()=>{
    await fetchProducts('computador');
    expect(fetchProducts('computador')).toMatchObject(computadorSearch);
  });
  test('Verifica se ao chamar a função fetchProducts sem parametro, retorna um erro com a mensagem: You must provide an url.', async () => {
    try{
      await fetchProducts();
    }
    catch(error){
      expect(error).toEqual(new Error('You must provide an url'))
    }
  });

});

