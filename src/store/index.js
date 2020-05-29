import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

import { seedData } from '../seed.js'
export default new Vuex.Store({
  state: {
    seedData,
  },
  mutations: {},
  actions: {},
  modules: {}
});
