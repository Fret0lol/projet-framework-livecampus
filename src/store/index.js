import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      email: '',
      password: '',
    }
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    setUserAction({ commit }, user) {
      commit('SET_USER', user)
    }
  },
  modules: {
  }
})
