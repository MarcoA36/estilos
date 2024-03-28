document.addEventListener('DOMContentLoaded', function() {
  // Obtén todos los botones de menú y menús correspondientes
  const toggleButtons = document.querySelectorAll('.toggle-menu');
  const menus = document.querySelectorAll('.menu');

  // Agrega el evento de clic a cada botón de menú
  toggleButtons.forEach(function(toggleButton, index) {
    toggleButton.addEventListener('click', function() {
      // Obtén el menú correspondiente al botón de menú actual
      const menu = menus[index];
      // Reemplaza la clase 'menu' por 'active' y viceversa en el menú
      if (menu.classList.contains('menu')) {
        menu.classList.replace('menu', 'active');
      } else {
        menu.classList.replace('active', 'menu');
      }
      console.log('desplegado' + menu.innerHTML);
    });
  });
});



// if(panatalla > 768 y menu.classList.contains('active')){
//   menu.classList.replace('active', 'menu');
// }
  