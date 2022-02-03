// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

const current = document.querySelector("#current");

const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4

imgs.forEach(img =>img.addEventListener('click',imgClick))


function imgClick(e){

    imgs.forEach(img => (img.style.opacity=1));

    current.src = e.target.src;

    current.classList.add('fade-in')

    setTimeout(()=>current.classList.remove('fade-in'), 500);
    e.target.style.opacity = opacity
}