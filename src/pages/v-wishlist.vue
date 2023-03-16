<template>
  <v-container>
    <h4 class="text-h4 mb-4">Wishlist</h4>
    <vCardproduct
      v-for="item in WISHLIST"
      :key="item.article"
      :card_item="item"
    >
    </vCardproduct>
  </v-container>
</template>

<script>
import vCardproduct from "@/blocks/v-card-product.vue";
import { mapGetters } from "vuex";

export default {
  name: "v-wishlist",
  components: {
    vCardproduct,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["WISHLIST"]),
  },
  methods: {},
  mounted() {},
};
</script>
