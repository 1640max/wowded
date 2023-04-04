// Глобальная переменная, в которую положим JSON с ценами
var prices;

// Парсим JSON из файла и кладём в prices
document.addEventListener("DOMContentLoaded", function parsePrices() {
  let request = new XMLHttpRequest();
  request.open("GET", "scripts/prices.json", false);
  request.send(null);
  prices = JSON.parse(request.responseText);
  calcHandler();
});

function calcHandler() {
  
  // Парсим значения из HTML. Знаю, лучше передавать значения через параметры функции. Переделай, если такой умный.
  let orderType = document.querySelector('.calc [name=order-type]:checked').value;
  let actorsAmount = document.querySelectorAll('#calc__characters input:checked').length;
  let date = document.querySelector('.calc .calc__date').value;
  
  // Записываем ссылки на нужные элементы формы. Будем их дизейблить в зависимости от типа заказа.
  let charactersInput = document.querySelectorAll('#calc__characters input');
  let datesInput = document.querySelectorAll('#calc__characters input');
  
  // Ноль актёров выбрать нельзя
  if (actorsAmount == 0) {
    actorsAmount = 1;
    document.querySelector('#characters_ded').checked = true;
  }
  
  // Определяем функции, включающие и выключающие элементы формы
   function disableCharactersInput() {
    charactersInput.forEach(function(item) {
    // item.checked=true;
    item.disabled=true;
    });
  }
  
/*  function disableDatesInput() {
    datesInput.disabled = true;
  } */
  
  function enableCharactersInput() {
    charactersInput.forEach(function(item) {
    item.disabled=false;
    });
  }
  
/*   function enableDatesInput() {
    datesInput.disabled = false;
  } */
  
  // Имея параметры заказа получаем цену. Параллельно отключаем неактуальные для типа заказа поля
  let price;
  switch (orderType) {
    case "Домой":
    case "Детский сад, школа":
      price = prices[orderType][actorsAmount][date];
      enableCharactersInput();
      break;
    case "Онлайн-поздравление":
    case "Особый заказ":
      price = prices[orderType][date];
      disableCharactersInput();
      break;
  }
  
  // Выводим цену
  document.querySelector('.calc__price').value = price;
}


// С расчётом цены всё. Дальше просто отправляем в GTM инфу о том, что юзер долистал до середины калькулятора

document.addEventListener('scroll', sendScrolledToCalc, {passive: true});
var calcCharactersHeader = document.querySelector('#calc__characters-header');
function sendScrolledToCalc() {
  if (inViewport(calcCharactersHeader)) {
    dataLayer.push({'event': 'scrolledToCalc'});
    document.removeEventListener('scroll', sendScrolledToCalc, {passive: true});
  }
}