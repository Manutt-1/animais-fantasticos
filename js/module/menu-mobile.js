import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];
  function openMenu() {
    menuLista.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuLista, ['click', 'touchstart'], () => {
      menuLista.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
    menuButton.addEventListener('click', openMenu);
  }
}