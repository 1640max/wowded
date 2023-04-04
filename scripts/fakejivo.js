// Окошко с сообщением
let fakejivo = document.querySelector(".fakejivo");

// Оно всплывает через какое-то время после открытия сайта
document.addEventListener("DOMContentLoaded", () => {
  setTimeout( () => {
    
    // Изначально стоит scale(0). Так надо, чтоб сработала анимация через свойство transition
    fakejivo.style.transform = "scale(1)";
    
    // Закрыть fakejivo при нажатии на настоящее Jivo
    document.querySelector("body > jdiv > jdiv > jdiv > jdiv").addEventListener('pointerup', closeFakejivo);
    document.querySelector("body > jdiv > jdiv > jdiv > jdiv > jdiv").addEventListener('click', closeFakejivo);
    
  }, 25000);
  
  
});



// При клике имитируем нажатие на чат
fakejivo.addEventListener('click', () => {
  
  // Для мобильников
  document.querySelector("body > jdiv > jdiv > jdiv > jdiv").dispatchEvent(new Event("pointerup"))
  
  // Для десктопов
  document.querySelector("body > jdiv > jdiv > jdiv > jdiv > jdiv").dispatchEvent(new Event("click"))

  // Скрываем окошко, раз на него нажали
  //fakejivo.style.transform = "scale(0)";
});





// При нажатии на крестик закрываем окошко
let fakejivoClose = document.querySelector(".fakejivo__close");
fakejivoClose.addEventListener('click', (event) => {
  
  // Чтобы чат не открывался при нажатии на крестик
  event.stopPropagation();
  fakejivo.style.transform = "scale(0)";
});

function closeFakejivo() {
  fakejivo.style.transform = "scale(0)";
}