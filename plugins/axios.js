export default function ({ $axios, redirect, store }, inject) {
  $axios.setBaseURL('https://casablancaaparthotel.com/api/')
  $axios.onRequest(config => {
    const locale = store.state.locale
    if (locale) {
      config.headers.common['Accept-Language'] = locale
    }
  })
  inject('api', $axios)
}
