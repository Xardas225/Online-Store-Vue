<template>
  <div id="app" class="v-application-wrap">
    <vSideBar />
    <vToolbar/>
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper';
import vSideBar from './components/v-sidebar.vue'
import vToolbar from './components/v-toolbar.vue'

export default {
  name: 'App',
  components: {
    vToolbar,
    vSideBar,
    vMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
