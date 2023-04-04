/*	Функция проверяет, виден ли объект на экране. Источник:
	https://stackoverflow.com/questions/49916259/show-element-when-in-viewport-on-scroll */
function inViewport( element ){

	// Get the elements position relative to the viewport
	var bb = element.getBoundingClientRect();

	// Check if the element is inside the viewport
	return !(bb.top > innerHeight || bb.bottom < 0);
}

function customScrollTo(selector, shift=0)
{
	let destination = document.querySelector(selector);
	let xcoord = destination.offsetTop;
	window.scrollTo({
		top: xcoord-shift,
		behavior: "smooth"
	});
}