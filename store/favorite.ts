
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore({
  id: 'favorites-store',
  state: () => {
    return {
      favorites: Object,
    }
  },
  actions: {
    addCarToFavoritesList(key: string, value: Object) {     
      if (this.favorites.hasOwnProperty(key)) {
        delete this.favorites[key];
      } else {
        this.favorites[key] = value
      }
    },

  },
  getters: {
    favoritesList: state => state.favorites,
  },
})