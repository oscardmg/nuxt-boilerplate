/**
 * https://github.com/nuxt-community/axios-module/issues/28
 * usar axios en archivos no vue
 */
class Service {
  constructor () {
    this.axios = null
    this.token = null

    const t = localStorage.getItem('auth._token.local')
    if (t !== null) {
      this.token = t
    }
  }

  set ($axios) {
    this.axios = $axios
  }

  get (url, config) {
    return this.axios.get(url, config)
  }

  post (url, data, config) {
    return this.axios.post(url, data)
  }

  put (url, data, config) {
    return this.axios.put(url, config)
  }

  patch (url, data, config) {
    return this.axios.patch(url, config)
  }

  delete (url, config) {
    return this.axios.delete(url, config)
  }

  setToken (token) {
    this.token = token
    this.axios.defaults.headers.common.authorization = token
  }
}

export default new Service()
