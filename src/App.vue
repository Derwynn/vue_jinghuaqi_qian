<template>
  <div id="app">
    <mf-header></mf-header>
    <router-view/>
    <mf-footer></mf-footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name: 'App',
  components:{
    'mf-header':Header,
    'mf-footer':Footer
  }
}
</script>

<style>
</style>
