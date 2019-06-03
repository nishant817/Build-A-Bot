import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex); // this will tell vue to use vuex

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },

  actions: {
    getParts({ commit }) {
      Axios.get('/api/parts') // see vue.config.js. need to create a vue proxy to use partial url like this
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
  },
});
