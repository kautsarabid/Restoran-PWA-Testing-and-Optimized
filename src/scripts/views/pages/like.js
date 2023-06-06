import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="top-restaurant">
      <h3>Favorite Restaurant</h3>
      <div id="top-restaurant-list" class="list-restaurant"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#top-restaurant-list');

    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(resto);
    });
  },

};
export default Like;
