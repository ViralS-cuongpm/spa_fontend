import zlib from 'browserify-zlib';
import buffer from 'buffer';
import rf from 'requestfactory';
import VueSession from 'vue-session';

const masterdataVersionKey = 'masterdata_version';
const masterdataKey = 'masterdata';

export default class FavoritesManager {

  static addFavorite(pair) {
    if (window.isAuthenticated) {
      return rf.getRequest('FavoriteRequest').createANewOne(pair)
        .then(res => res.data);
    } else {
      let favoritePairs = FavoritesManager.get('favorite_pairs') || [];
      favoritePairs.push(pair);
      FavoritesManager.set('favorite_pairs', favoritePairs);
      return Promise.resolve(pair);
    }
  }

  static removeFavorite(pair) {
    if (window.isAuthenticated) {
      return rf.getRequest('FavoriteRequest').deleteFavorite(pair)
        .then(res => pair);
    } else {
      let favoritePairs = FavoritesManager.get('favorite_pairs') || [];
      window._.remove(favoritePairs, item => item.coin_pair === pair.coin_pair);
      FavoritesManager.set('favorite_pairs', favoritePairs);
      return Promise.resolve();
    }
  }

  static async getFavorites() {
    let favoritePairs = FavoritesManager.get('favorite_pairs') || [];
    if (window.isAuthenticated) {
      // if (favoritePairs.length > 0) {
      //   await rf.getRequest('FavoriteRequest').createList(favoritePairs);
      //   FavoritesManager.set('favorite_pairs', []);
      // }
      return rf.getRequest('FavoriteRequest').getList()
        .then(res => res.data);
    } else {
      return Promise.resolve(favoritePairs);
    }
  }

  static get(key) {
    const string = window.localStorage.getItem('favorites_' + key);
    if (string) {
      return JSON.parse(string);
    }
  }

  static set(key, value) {
    window.localStorage.setItem('favorites_' + key, JSON.stringify(value));
  }
};
