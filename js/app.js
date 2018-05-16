(() => {

  const navMenu = document.getElementById('nav');

  const menuClose = () => navMenu.classList.remove('nav__visible');

  const menuToggle = () => {
    navMenu.classList.contains('nav__visible') ? menuClose() : navMenu.classList.add('nav__visible');
  }
  window.menuClose = menuClose;
  window.menuToggle = menuToggle;

})(window)
