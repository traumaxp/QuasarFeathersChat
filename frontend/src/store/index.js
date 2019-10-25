// ./src/store/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import { FeathersVuex } from 'feathers-vuex'
import auth from './store.auth'

Vue.use(Vuex)
Vue.use(FeathersVuex)

// Require the entire folder of service plugins with Webpack
// const requireModule = require.context('./services', false, /.js$/)
// const servicePlugins = requireModule
//   .keys()
//   .map(modulePath => requireModule(modulePath).default)

// Or you can import them manually for Rollup, etc.
// import users from './services/users'
import users from './services/users'
import messages from './services/messages'
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {
    createSession (state, session) {
      // state.token = session.token
      state = session
    },

    destroySession (state) {
      // state.token = ''
      state = []
    }
  },
  actions: {
    postLogin ({ commit }, details) {
      commit('createSession', details)
    },

    postLogout ({ commit }) {
      commit('destroySession')
    }
  },
  plugins: [
    // if you're using require.context, spread the plugins into the array.
    // users, // if you're manually importing, just add the plugins into the array, like this
    auth,
    users,
    messages
  ]
})
