import menu from './templates/menu.json';
import foodCard from './templates/template.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const listMenu = document.querySelector('.js-menu');
listMenu.insertAdjacentHTML('beforeend', foodCard(menu));

const switchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

function currentTheme() {
  body.setAttribute('class', localStorage.getItem('theme'));
  if (localStorage.getItem('theme') === Theme.DARK)
    switchToggle.checked = 'true';
}

const changeTheme = function () {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

currentTheme();
switchToggle.addEventListener('change', changeTheme);

console.log(switchToggle.checked);
console.log(body);
