
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.add('menu--open');
  if(menu.classList.contains('slide-right')){
      menu.classList.remove('slide-right');
      menu.classList.add('slide-left');
    
    } else {
        menu.classList.add('slide-right');
        menu.classList.remove('slide-left');
        
    }
    
    event.stopPropagation();
    
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

window.addEventListener('click', toggleMenu);