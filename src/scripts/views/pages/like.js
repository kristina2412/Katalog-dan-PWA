/* eslint-disable no-undef */
import FavoriteRestoIdb from '../../data/restaurantdb-source';
import { restaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <article class="post">
            <h2 tabindex="0" id="title-main">Your Like Resto</h2>
            <div id="resto_list" class="card"></div>
        </article>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restaurantContainer = document.querySelector('#resto_list');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += restaurantListTemplate(resto);
    });

    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('title-main').focus();
    });
  },
};

export default Like;
