<template>
  <v-app>
    <v-navigation-drawer
      app
      left
      absolute
      temporary
      v-model="drawer"
    >
      <v-card-title class="d-flex text-h6">Каталог</v-card-title>

      <v-list-item 
        class="d-flex align-start justify-start" 
        v-for="item in menu_items" 
        :key="item.id"
      >
        <v-list-item-title>
          <router-link  class="text-black" :to="item.url">{{ item.name }}</router-link>
        </v-list-item-title>
      </v-list-item>

    </v-navigation-drawer>
    
    <v-app-bar
    app 
    color="red"
    >
      <v-app-bar-nav-icon  @click="drawer = !drawer">
        <svg-icon 
          type="mdi" 
          :path="mdiMenu"
        >
        </svg-icon>
      </v-app-bar-nav-icon>

      <router-link class="text-decoration-none text-white" :to="{name: 'home'}" >
        <v-app-bar-title>
          <h4 class="d-flex align-start text-h4">Internet Store</h4>
        </v-app-bar-title>
      </router-link>

      <div class="w-100 px-4 d-flex justify-end align-center">
        <router-link :to="{name: 'cart'}">
          <v-app-bar-nav-icon>
            <svg-icon 
              type="mdi" 
              :path="mdiTrashCan" 
              class="d-block"
              color="white"
            ></svg-icon>
          </v-app-bar-nav-icon>
        </router-link>
        <router-link :to="{name: 'home'}">
          <v-app-bar-nav-icon>
            <svg-icon 
              type="mdi" 
              :path="mdiAccountGroup" 
              class="d-block"
              color="white"
            ></svg-icon>
          </v-app-bar-nav-icon>
        </router-link>
      </div>

    </v-app-bar>


    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu,mdiTrashCan,mdiAccountGroup } from '@mdi/js';

export default {
  name: 'App',
  components: {
    SvgIcon
  },
  data() {
    return {
      mdiMenu: mdiMenu,
      mdiTrashCan: mdiTrashCan,
      mdiAccountGroup:mdiAccountGroup,
      drawer: false,
      menu_items: [
        {
          id: 0,
          name: 'Одежда',
          url: '/cloth'
        },
        {
          id: 1,
          name: 'Обувь',
          url: '/shoes'
        },
        {
          id: 2,
          name: 'Техника',
          url: '/tech'
        },
        {
          id: 2,
          name: 'Товары для дома',
          url: '/for_home'
        }
      ]
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
</style>

