'use strict';

const menuButton = document.querySelector('#menu-btn');
const navToggle = () => {
  menuButton.classList.toggle('open');
};

menuButton.addEventListener('click', navToggle);
