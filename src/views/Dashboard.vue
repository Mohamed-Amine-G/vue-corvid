<template>
    <div class="px-10 py-5" >
        <div class="mb-8 d-flex">
            <span>Dashboard</span>
            <v-icon color="black">mdi-chevron-right </v-icon>
        </div>
        <div class="d-flex pa-0 rounded" style="border: 1px solid lightgray;">
            <v-icon class="px-2">mdi-magnify</v-icon>
            <input v-model="keyword" placeholder="Select for a country ..." style="width: 100vw;"/> 
            <v-btn class="ml-auto white--text" color="#183754" @click="getDataByCountryName">Search</v-btn>
        </div>

      <v-card
        class="countries-section__card mt-10 mx-auto my-12"
        v-if="countryData != null"
        max-width="50%"
        :to="'/about/' + countryData.country"
      >
        <v-img class="white--text align-end height=250" :src="countryData.countryInfo.flag">
        </v-img>

        <v-card-text class="countries-section__card--text">
          <v-row>
            <div class="title mb-2 text-center">
              <v-card-title>{{ countryData.country }}</v-card-title>
            </div>
            <v-col cols-6>
              <div class="countries-section__card--list-item">
                <strong>Total cases:</strong> {{ countryData.cases}}
              </div>
              <div class="countries-section__card--list-item">
                <strong>Total deaths:</strong> {{ countryData.deaths }}
              </div>
            </v-col>
            <v-col cols-6>
              <div class="countries-section__card--list-item">
                <strong>Today cases:</strong> {{ countryData.todayCases}}
              </div>
              <div class="countries-section__card--list-item">
                <strong>Today deaths:</strong> {{ countryData.todayDeaths }}
              </div>
              </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card v-else-if="countryData == null">
        <v-card-text class="text-center">
          There is no data to display
        </v-card-text>
      </v-card>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  data: ()=> ({
      keyword: ""
  }),
  methods: {
      ...mapActions(['getCorvidData']),
      getDataByCountryName() {
        return this.getCorvidData(this.keyword);
      } 
  },
  computed: {
    ...mapGetters(["countryData"]),
  },
};
</script>
