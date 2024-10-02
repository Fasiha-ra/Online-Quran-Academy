//menu icon
// Select the hamburger and the nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Add event listener to toggle 'nav-open' class on click
hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'nav-open' class to close the menu
    nav.classList.remove('nav-open');
  });
});