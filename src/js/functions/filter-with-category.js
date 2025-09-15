// Получаем элементы один раз
const list = document.querySelector('.filter__products-list');
const tagButtons = document.querySelectorAll('.tag__btn');

// Массив продуктов
const products = [
  { category: 'pants', productName: 'Pants Fila Sport', price: '59$', photo: 'pants-1.jpg' },
  { category: 'pants', productName: 'Pants Adidas', price: '49$', photo: 'pants-2.jpg' },
  { category: 'jackets', productName: 'Jacket Adidas', price: '149$', photo: 'jackets-1.jpg' },
  { category: 'sneakers', productName: 'Sneakers Adidas', price: '99$', photo: 'sneackers-1.jpg' },
  { category: 'sneakers', productName: 'Sneakers Vans', price: '999$', photo: 'sneackers-2.jpg' },
];

// Создаем HTML-шаблон для карточки товара
const createProductCard = (item) => {
  return `
    <li class="product-card" data-category="${item.category}">
      <div class="product-card__img">
        <img src="img/${item.photo}" alt="${item.productName}">
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">${item.productName}</h3>
        <span class="product-card__price">${item.price}</span>
      </div>
    </li>
  `;
};

// Генерируем все карточки сразу и добавляем в DOM
list.innerHTML = products.map(createProductCard).join('');

// Получаем все карточки после добавления в DOM
const productCards = list.querySelectorAll('.product-card');

// Обработчик для кнопок фильтров
const handleFilterClick = (e) => {
  const activeButton = document.querySelector('.tag__btn--active');
  if (activeButton) activeButton.classList.remove('tag__btn--active');

  e.target.classList.add('tag__btn--active');

  const category = e.target.dataset.category;
  filterProducts(category);
};

// Добавляем обработчики событий через делегирование
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('tag__btn')) {
    handleFilterClick(e);
  }
});

// Функция фильтрации
function filterProducts(category) {
  productCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('product-card--hidden');
    } else {
      card.classList.add('product-card--hidden');
    }
  });
}

// По умолчанию показываем все карточки
filterProducts('all');
