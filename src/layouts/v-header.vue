<template>
   <v-navigation-drawer app left absolute temporary v-model="drawer">
      <v-list-item
        class="d-flex align-start justify-start"
        v-for="item in menu_items"
        :key="item.id"
      >
        <v-list-item-title>
          <router-link class="text-black" :to="item.url">{{
            item.name
          }}</router-link>
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
  <v-app-bar app color="red" class="d-flex align-center">
    <v-app-bar-nav-icon @click="drawer = !drawer">
      <svg-icon type="mdi" :path="mdiMenu"> </svg-icon>
    </v-app-bar-nav-icon>

    <router-link class="text-decoration-none text-white" :to="{ name: 'home' }">
      <v-app-bar-title>
        <h4 class="d-flex align-start text-h4">Internet Store</h4>
      </v-app-bar-title>
    </router-link>

    <div class="w-100">
      <v-responsive
        class="mx-auto d-flex"
        max-width="344"
        height="60"
        width="500"
      >
        <v-text-field label="Поиск" v-model="searchValue">
          <i class="search-icon material-icons" @click="search(searchValue)"
            >search</i
          >
        </v-text-field>
      </v-responsive>
    </div>

   

    <div class="w-100 px-4 d-flex justify-end align-center">
      <router-link :to="{ name: 'cart' }">
        <v-app-bar-nav-icon>
          <svg-icon
            type="mdi"
            :path="mdiTrashCan"
            class="d-block"
            color="white"
          ></svg-icon>
        </v-app-bar-nav-icon>
      </router-link>
      <router-link :to="{ name: 'wishlist' }">
        <v-app-bar-nav-icon>
          <svg-icon
            type="mdi"
            :path="mdiHeartOutline"
            class="d-block"
            color="white"
          ></svg-icon>
        </v-app-bar-nav-icon>
      </router-link>
      <router-link :to="{ name: 'users' }">
        <v-app-bar-nav-icon>
          <svg-icon
            type="mdi"
            :path="mdiAccountGroup"
            class="d-block"
            color="white"
          ></svg-icon>
        </v-app-bar-nav-icon>
      </router-link>
      <router-link :to="{ name: 'profile' }">
        <v-app-bar-nav-icon>
          <svg-icon
            type="mdi"
            :path="mdiAccountEdit"
            class="d-block"
            color="white"
          ></svg-icon>
        </v-app-bar-nav-icon>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMenu,
  mdiTrashCan,
  mdiAccountGroup,
  mdiHeartOutline,
  mdiAccountEdit,
} from "@mdi/js";

export default {
  name: "v-header",
  components: {
    SvgIcon,
  },
  data() {
    return {
      mdiMenu: mdiMenu,
      mdiTrashCan: mdiTrashCan,
      mdiAccountGroup: mdiAccountGroup,
      mdiHeartOutline: mdiHeartOutline,
      mdiAccountEdit: mdiAccountEdit,
      drawer: false,
      menu_items: [
        {
          id: 2,
          name: "Каталог",
          url: "/catalog",
        },
        {
          id: 2,
          name: "Корзина",
          url: "/cart",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
