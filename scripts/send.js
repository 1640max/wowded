function send()
{
  // Поле ввода номера телефона
  let input = document.querySelector('.modal__input');
  
  // Кнопка «Отправить номер»
  let button = document.querySelector('.modal__button');
  
  // Форма с калькулятором цен
  let calc = document.querySelector('.calc');
  let calcData = new FormData(calc);
  
  // Дописываем значение «price», которое formData не парсит :(
  let priceParsed = parseInt(document.querySelector('.calc__price').value);
  if (!priceParsed) priceParsed = 0; // Если цена договорная, то 0
  calcData.append("price", priceParsed);
  
  // Форма, в которой оставили номер
  let phoneForm = document.querySelector('.modal__lead-form');
  let phoneFormData = new FormData(phoneForm);
  
  // Номер телефона, который оставили
  let tel = input.value;
  if (!tel) {
    button.innerText = "Сначала введите свой номер";
    return false;
  }
  
  // Объединяем данные из двух форм
  let combinedData = calcData; // Да-да, тут копирование ссылки, а не значения
  for(let [name, value] of phoneFormData) {
    combinedData.append(name, value);
  };
  
  // Отправляем данные формы
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'send.php');
  xhr.send(combinedData);
  
  xhr.onload = function() {
    
    /* Если php ответил кодом 200, то всё хорошо. Иначе ошибка */
    if (xhr.status == 200) {
      input.disabled = true;
      input.style.opacity = "25%";
      button.value = "Скоро перезвоним!";
      button.disabled = true;
      button.classList.add("lead-button_disabled");
      
      var dataLayerjson = {
        'event': 'formsuccess',
        'zakaz': calcData.get('order-type'),
        'count': calcData.getAll('characters[]').length,
        'data' : calcData.get('date'),
        'summa': parseInt(calcData.get('price'))
      };
      
      /* Отправлям событие в Google Tag Manager */
      window.dataLayer = window.dataLayer || [];
      dataLayer.push(dataLayerjson);
    }
    else {
      button.innerText = "Ошибка";
    }
  }
}