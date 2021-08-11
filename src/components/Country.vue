<template>
  <section class="about-section">
    <v-btn class="btn-primary mb-5"  :to="'/dashboard'">&larr;  Back</v-btn>
    <v-row align="center" justify="center">
        <v-col cols="4">
            <v-img class="white--text " :src="countryData.countryInfo.flag">
            </v-img>
        </v-col>
        <v-col cols="8">
        <v-card class="text-center" v-if="historicalData != null">
            <v-card-text class="pa-5" style="border: solid 1px lightgray;">
                <apexchart 
                    type="line"  
                    height="250"
                    :options="options" :series="series">
                </apexchart>  
            </v-card-text>
        </v-card>
        </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'Country',
    props: ["countryName"],
    data() {
        return {

        }
    },
    created() {
        if(this.countryName) {
            this.getHistoricalDataByCountryName();
            this.getCorvidData();
        }
    },
    computed: {
        ...mapGetters(["historicalData"]),
        ...mapGetters(["countryData"]),
        labels() {
            return Object.keys(this.historicalData.timeline.cases).slice(0, 7);
        },
        value() {
            return Object.values(this.historicalData.timeline.cases).slice(0, 7);
        },
        options() {
            return {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false
                    },      
                },
                xaxis: {
                    categories:  this.labels,   
                }, 
                zoom: {
                    enabled: false,
                },  
                stroke: {
                    curve: 'straight',
                    width: 2
                },        
                title: {
                    text: 'Weekly Deasease Cases',
                    align: 'center',
                    style: {
                        fontSize:  '20px',
                    },
                    colors: ['#00897b']
                }
            }
        },
        series() {
            return [{name: 'series-1', data: this.value}];
        } 
    },
    methods: {
        ...mapActions(['getHistoricalData']),
        ...mapActions(['getCorvidData']),
        getHistoricalDataByCountryName() {
            return this.getHistoricalData(this.countryName);
        },
        getDataByCountryName() {
            return this.getCorvidData(this.countryName);
      } 

    },
};

</script>


