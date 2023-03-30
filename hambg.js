var hamburgerMenu = document.getElementById('hamburgerMenu');
var dropdown = document.querySelector('.dropdown');

hamburgerMenu.addEventListener('click', function() {
  dropdown.classList.toggle('show');
});