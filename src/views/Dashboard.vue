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
        this.getCorvidData(this.keyword);
      } 
  },
  computed: {
    ...mapGetters(["countryData"]),
  },
};
</script>
