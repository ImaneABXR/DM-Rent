
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore({
  id: 'favorites-store',
  state: () => {
    return {
      favorites: Array<Object>,
    }
  },
  actions: {
    addValueToFavoritesList(value: Object) {
      this.favorites.push(value)
    },

  },
  getters: {
    favorites: state => state.favorites,
  },
})