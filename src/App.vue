<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <my-header v-show="this.$route.meta.top1Show"></my-header> 
     <my-nav v-show="this.$route.meta.top1Show"></my-nav>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/header"
import MyFooter from "./components/footer"
import MyNav from "./components/nav"

export default {
  name: 'App',
   components:{
    MyHeader,
    MyFooter,
    MyNav
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
