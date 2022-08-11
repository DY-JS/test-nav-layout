import './styles/main.scss';

const marquee = document.querySelector('.header__marquee');
marquee.textContent = `we ship inside the us only  🇺🇸  we ship inside the us only  🇺🇸  we ship inside the us only  🇺🇸  we ship inside the us only  🇺🇸  we ship inside the us only  🇺🇸  `;

const nav = document.querySelector('.nav');
const openIcon = document.querySelector('.icon--menu');
const closeIcon = document.querySelector('.icon--cross');
const navList = document.querySelector('.nav__list');

function openMenu() {
  nav.classList.add('nav--open');
  openIcon.classList.add('icon--none');
  closeIcon.classList.remove('icon--none');
}

function closeMenu() {
  nav.classList.remove('nav--open');
  openIcon.classList.remove('icon--none');
  closeIcon.classList.add('icon--none');
}

openIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
navList.addEventListener('click', closeMenu);
