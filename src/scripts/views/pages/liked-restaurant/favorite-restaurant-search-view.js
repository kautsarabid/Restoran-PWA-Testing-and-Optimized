import { createRestaurantTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="top-restaurant">
        <input id="query" type="text">
        <h3>Favorite Restaurant</h3>
          <div id="top-restaurant-list" class="list-restaurant">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    if (!restaurants) return;
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, resto) => carry.concat(createRestaurantTemplate(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate;
    }

    document.getElementById('top-restaurant-list').innerHTML = html;

    document.getElementById('top-restaurant-list').dispatchEvent(new Event('restaurants:updated'));
  }

  _showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
