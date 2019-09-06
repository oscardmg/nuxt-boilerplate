import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
  // counter: 0
})

export const mutations = {
  // increment (state) {
  //   state.counter++;
  // }
}

export const actions = {
  nuxtClientInit ({ state, getters, commit, dispatch }) {
    // console.log('store/index.js nuxtClientInit');
  }
}

export const plugins = [
  createPersistedState()
]
