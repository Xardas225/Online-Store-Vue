<template>
  <v-app>
    
    <vHeader></vHeader>
    
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import vHeader from '@/layouts/v-header.vue';

export default {
  name: 'App',
  components: {
    vHeader
  },
  data() {
    return { 
      searchValue: '',
    }
  },
  methods: {
    search(value) {
      console.log(value);
    }
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

.search-icon {
  position: absolute;
  top: 15px;
  right: 0;
  cursor: pointer;
}
</style>

