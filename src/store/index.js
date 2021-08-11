import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryData: null,
    historicalData: null,
  },
  getters: {
    countryData: state => {
      return state.countryData;
    },
    historicalData: state => {
      return state.historicalData;
    }
  },
  mutations: {
    gotData(state, info) {
      state.countryData = info;
    },
    gotHistoricalData(state, info) {
      state.historicalData = info;
    }
  },
  actions: {
    async getCorvidData({commit}, name) {
      let req_url = "https://disease.sh/v3/covid-19/countries/" + name;
      try {
        const res = await axios.get(req_url);
        commit("gotData", res.data);
      } catch (err) {
        console.log("Error => ", err);
      }
    },

    async getHistoricalData({commit}, name) {
      let req_url = new URL ('https://disease.sh/v3/covid-19/historical/' + name);
      try {
        const res = await axios.get(req_url);
        commit("gotHistoricalData", res.data);
      } catch(err) {
        console.log("Error =>", err);
      }
    }
  },
  
})
