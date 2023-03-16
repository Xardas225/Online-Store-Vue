<template>
  <v-navigation-drawer app left absolute temporary v-model="this.$props.drawer">
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
</template>

<script>
export default {
  name: "v-nav-drawer",
  props: {
    drawer: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  components: {},
  data() {
    return {
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
