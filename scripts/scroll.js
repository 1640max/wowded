document.addEventListener("DOMContentLoaded", function() {

  /* Берём кнопки из карточек с типами заказов */
  let orderTypes__buttons = document.querySelectorAll('.order-types__button:not(.open-modal)');
  
  /* Берём блок с радиокнопками в калькуляторе цен */
  let calc__orderTypes = document.querySelectorAll('.calc__order-type');



  /* На каждую кнопки из карточек... */
  orderTypes__buttons.forEach( function(item, i) {
    
    /* ...вешаем обработчик клика */
    item.addEventListener("click", function() {
      
      /* Мотнуть к калькулятору */
      customScrollTo('#calc-header', 75);
      
      /* Отметить соответствующую радиокнопку */
      calc__orderTypes[i].checked = true;
      
      /* Пересчитать цену */
      calcHandler();
    });
  });
});