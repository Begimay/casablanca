export const state = () => ({
  locales: ['ru', 'en'],
  locale: 'en',
  currency: 'usd',
  favorites: []
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  SET_CURRENCY(state, payload) {
    state.currency = payload
  },
  SET_FAVORITES(state, payload) {
    state.favorites.push(payload)
  },
  DELETE_FAVOURITES(state, payload) {
    state.favorites.splice(payload, 1)
  }
}
