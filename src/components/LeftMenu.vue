<template>
    <v-navigation-drawer app color="#183754">   
      <v-toolbar-title class="pa-5">
        <router-link to="/home" class="main-header__link">
            <img src="../assets/logo.png"/>
        </router-link>
      </v-toolbar-title>

      <v-list>
        <v-list-item-group>
            <v-list-item v-for="[icon, text, page] in menuitems" :key="icon">
                <v-list-item-icon>
                    <v-icon color="white">{{ icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <router-link :to="page" style="color: white; text-decoration: none;">
                        {{text}}
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'LeftMenu',
    data() {
        return {
            menuitems: [
                ['mdi-home', 'Home', 'home'],
                ['mdi-view-dashboard', 'Dashboard', 'dashboard'],
            ],
            activeMenu: 'home',
        }
    }
}
</script>

<style>

</style>
