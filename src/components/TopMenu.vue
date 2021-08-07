<template>
    <v-app-bar app type="header" style="background: none;">
    <v-container>
        <div class="d-flex align-center">
        <v-spacer></v-spacer>
        <v-btn :ripple="false" icon class="no-background-hover" target="_blank" text>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn :ripple="false" icon class="no-background-hover" target="_blank" text>
            <v-icon>mdi-account</v-icon>
        </v-btn>
        
        <span>demo@mytigate.com</span>
        </div>
    </v-container>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'TopMenu',
    }
</script>

<style>

</style>
