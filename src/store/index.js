import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: null,
  },
  getters: {
    countryData: state => {
      return state.countryData;
    }
  },
  mutations: {
    gotData(state, info) {
      state.countryData = info;
    }
  },
  actions: {
    async getCorvidData({commit}, name) {
      // let req_url = "https://restcountries.eu/rest/v2/name/" + name;
      let req_url = "https://disease.sh/v3/covid-19/countries/" + name;
      try {
        const res = await axios.get(req_url);
        commit("gotData", res.data);
      } catch (err) {
        console.log("Error => ", err);
      }
    }
  },
})
