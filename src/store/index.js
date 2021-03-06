import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

import {
  seedData
} from '../seed.js'
export default new Vuex.Store({
  state: {
    seedData,
  },

  getters: {
    getActiveDay(state) {
      return state.seedData.find((day) => day.active);
    },
  },

  mutations: {
    setActiveDay(state, dayId) {
      return state.seedData.map((dayObj) => {
        dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
      });
    },
  },
  actions: {},
  modules: {}
});