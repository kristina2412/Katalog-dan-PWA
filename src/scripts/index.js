/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow-callback */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './global/config';
import data from '../DATA.json';

let itemRestaurant = '';
data.restaurants.forEach((restaurant) => {
  itemRestaurant += `
  <div class="card-item">
    <img src="${restaurant.pictureId}" alt="">
    <h3 tabindex="0">${restaurant.name}</h3>
    <p class="card-item-desc" tabindex="0">${restaurant.description}</p>
    <div class="card-item-info">
      <h4 tabindex="0"> Kota ${restaurant.city}</h4>
      <h4 tabindex="0"> Provinsi ${restaurant.provinsi}</h4>      
      <h5 tabindex="0"> Rating ${restaurant.rating}</h5>
    </div>
  </div>
  `;
  document.getElementById('resto_list').innerHTML = itemRestaurant;
});

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const header = document.querySelector('header');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');

menu.addEventListener('click', function (event) {
  event.preventDefault();
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', remove);

main.addEventListener('click', remove);
header.addEventListener('click', remove);

function remove() {
  drawer.classList.remove('open');
}
