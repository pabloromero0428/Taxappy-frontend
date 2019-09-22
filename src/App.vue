<template>
  <v-app>
 
    <router-view></router-view>
    <Footer id="footer" />
   
  </v-app>
</template>

<script>
import { Home } from "./views/Home.vue"
import  Footer from "./components/Footer.vue"


export default {


  name: 'App',
  data: () => ({
    //
  }),
  components:{
    Home,
    Footer,
   
   
  
  }
  
};
</script>

<style lang="scss">

</style>
