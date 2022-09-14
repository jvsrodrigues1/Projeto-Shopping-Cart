require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test ('Executa a função fetchItems com o argumento "MLB1615760527" verifica se fetch foi chamada', async ()=>{
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Executa a função fetchItem com o argumento do item "MLB1615760527", e verifica seu endpoint',async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item.',async () => {
    expect.assertions(1);
    const call2 = await fetchItem('MLB1615760527');
    expect(call2).toMatchObject(item);
  });
  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url".',async () => {
    expect.assertions(1);
    try{
      await fetchItem();
    }
    catch(error){
      expect(error).toEqual(new Error('You must provide an url'))
    }
  });
});
