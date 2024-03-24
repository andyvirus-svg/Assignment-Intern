document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const drawer = document.querySelector('.drawer');
  
    burgerMenu.addEventListener('click', function() {
      drawer.classList.toggle('active');
    });
  });