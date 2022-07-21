const navToggler = document.querySelector('.nav__toggler-icon'),
      navMenu = document.querySelector('.nav__menu');

navToggler.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
  navToggler.classList.toggle('ph-x');
})

/*==================== Scroll Header ====================*/
function scrollHeader() {
  const header = document.querySelector('.header');

  (this.scrollY >= 50) ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);