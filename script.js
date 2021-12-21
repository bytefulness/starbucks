'use strict';

const menuButton = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileBlackBg = document.querySelector('#filter');

const navToggle = () => {
  menuButton.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
  mobileBlackBg.classList.toggle('black-filter');
};

menuButton.addEventListener('click', navToggle);
