var modal = document.querySelector(".modal");

// Get the button that opens the modal
var buttons = document.querySelectorAll(".open-modal");

// Get the <span> element that closes the modal
var close = document.querySelector(".modal__close");

// When the user clicks the button, open the modal
buttons.forEach(function(button) {
  button.onclick = function() {
    modal.classList.add("modal_enabled");
  }
});

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.classList.remove("modal_enabled");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("modal_enabled");
  }
}