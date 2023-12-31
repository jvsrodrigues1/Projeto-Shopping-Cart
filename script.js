// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const cartItems = document.querySelector('.cart__items');

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
 const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {newObjectect} product - newObjecteto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {newObjectect} product - newObjecteto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

 cartItemClickListener = (event) => {
  event.target.remove();
 };

 const loading = () => {
  const loadSection = document.createElement('section');
  loadSection.className = 'loading';
  loadSection.innerText = 'Carregando...';
  const secItems = document.querySelector('.items');
  secItems.appendChild(loadSection);
};

const loadingDone = () => {
  const loadSection = document.querySelector('.loading');
  console.log(loadSection);
  loadSection.remove();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addToCart = async () => {
  await fetchItem('MLB1341706310');
  const getAllItems = document.querySelectorAll('.item__add');
  getAllItems.forEach((item) => {
    item.addEventListener('click', async (event) => {
      const target = event.target.parentNode.firstChild.innerText;
      const fetch2 = await fetchItem(target);
      const getAllCarts = document.querySelector('.cart__items');
      const newObject = {
        id: fetch2.id,
        title: fetch2.title,
        price: fetch2.price,
      };
      getAllCarts.appendChild(createCartItemElement(newObject));
    });
  });
};

const response = async () => {
  const itemsSec = document.querySelector('.items');
  loading();
  const data = await fetchProducts('computador');
  loadingDone();
  for (let index = 0; index < data.length; index += 1) {
    itemsSec.appendChild(createProductItemElement(data[index]));
  }
  addToCart();
};

const emptyCart = () => {
  const emptyButton = document.querySelector('.empty-cart');
  emptyButton.addEventListener('click', () => {
    cartItems.innerHTML = '';
   });
  };

  emptyCart();

window.onload = async () => {
  await response();
};