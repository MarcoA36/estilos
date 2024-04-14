// NAVBAR

//responsive
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-menu');
  const menus = document.querySelectorAll('.menu');

  toggleButtons.forEach(function(toggleButton, index) {
    toggleButton.addEventListener('click', function() {
      const menu = menus[index];
      if (menu.classList.contains('menu')) {
        menu.classList.replace('menu', 'active');
      } else {
        menu.classList.replace('active', 'menu');
      }
      console.log('desplegado ' + menu.innerHTML);
    });
  });

  // Agrega un evento de redimensionamiento a la ventana
  window.addEventListener('resize', function() {
    // Verifica el ancho de la ventana
    if (window.innerWidth > 768) { // Cambia el valor según tu media query
      menus.forEach(function(menu) {
        menu.classList.remove('active');
        menu.classList.add('menu');
      });
    }
  });
});

//submenu

document.addEventListener('DOMContentLoaded', function() {
  const submenuItems = document.querySelectorAll('.submenu');

  submenuItems.forEach(function(submenuItem) {
    submenuItem.addEventListener('click', function(event) {
      // Cerrar todos los submenús abiertos antes de abrir uno nuevo
      submenuItems.forEach(function(item) {
        const subMenu = item.querySelector('.sub-menu');
        if (subMenu && subMenu.style.display === 'block') {
          subMenu.style.display = 'none';
        }
      });

      // Prevenir el comportamiento predeterminado si se hace clic en un enlace
      event.preventDefault();

      // Abrir o cerrar el submenú actual
      const subMenu = this.querySelector('.sub-menu');
      if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
      } else {
        subMenu.style.display = 'block';
      }

      // Detener la propagación del evento para evitar conflictos
      event.stopPropagation();
    });
  });

  // Cerrar el submenú si se hace clic en cualquier lugar fuera de él
  document.addEventListener('click', function(event) {
    submenuItems.forEach(function(submenuItem) {
      const subMenu = submenuItem.querySelector('.sub-menu');
      if (subMenu && subMenu.style.display === 'block' && !submenuItem.contains(event.target)) {
        subMenu.style.display = 'none';
      }
    });
  });
});


// SIDEBAR

   const toggleBtn = document.getElementById('toggle-sidebar');
   const sidebar = document.getElementById('sidebar');
   const closeBtn = document.getElementById('close-sidebar')

   function toggleSidebar() {
       sidebar.classList.toggle('open');
       console.log('clase')
   }
   function closeSidebar() {
    sidebar.classList.toggle('open');
    console.log('clase')
}

toggleBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', closeSidebar);






// MODALES

document.addEventListener('DOMContentLoaded', function() {
  const modalBtns = document.querySelectorAll('.modal-btn');
  const modal = document.getElementById('modal');
  const closeModal = modal.querySelector('.close');

  modalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      modal.style.display = 'block'; // Mostrar el modal cuando se hace clic en un botón
    });
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Ocultar el modal cuando se hace clic en el botón de cerrar
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none'; // Ocultar el modal si se hace clic fuera del área del modal
    }
  });
});



