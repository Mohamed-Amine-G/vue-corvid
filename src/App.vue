<template>
  <v-app id="corvid">  
    <LeftMenu />
    <TopMenu /> 
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    components: {
      LeftMenu: () => import("@/components/LeftMenu.vue"),
      TopMenu: () => import("@/components/TopMenu.vue")
    },
    data: () => ({

    }),
  }
</script>
<style>
  input:focus{
    outline: none;
  }
  button {
    text-transform: none !important;
  }
  .no-background-hover::before {
   background-color: transparent !important; 
  }
  .no-background-hover:hover {
   color: #183754 !important; 
  }
</style>