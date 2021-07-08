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
switchToggle.addEventListener('change', changeTheme);

body.setAttribute('class', localStorage.getItem('theme') || Theme.LIGHT);
if (localStorage.getItem('theme') === Theme.DARK) switchToggle.checked = 'true';

function changeTheme(e) {
  if (e.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

console.log(body);
