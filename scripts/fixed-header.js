/* При загрузке страницы и при каждом скролле вызываем функцию */
document.addEventListener('DOMContentLoaded', fixedHeaderHandler);
document.addEventListener('scroll', fixedHeaderHandler, {passive: true});

var header = document.querySelector('.header');
var fixedHeader = document.querySelector('.fixed-header');

function fixedHeaderHandler()
{
  // Если хэдэр во вьюпорте, то скрываем фиксированый хэдэр
	if (inViewport(header)) {
    fixedHeader.classList.add("fixed-header_hidden");
    fixedHeader.style.pointerEvents = "none";
  }
  // Иначе, отображаем его
  else {
    fixedHeader.classList.remove("fixed-header_hidden");
    fixedHeader.style.pointerEvents = "auto";
  }
}