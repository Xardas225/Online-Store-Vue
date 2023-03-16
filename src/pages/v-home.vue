<template>
  <v-container>
    <div class="mb-4">
      <v-row>
        <v-col md="8" class="v-home-carousel" v-if="HOME_DATA.carousel">
          <h4 class="text-h4 mb-4 text-left">Популярные товары</h4>
          <vCarouselElement
            :carousel_items="HOME_DATA.carousel"
          ></vCarouselElement>
        </v-col>
        <v-col class="v-home-promotion" md="4" v-if="HOME_DATA.promotion">
          <!-- <h4 class="text-h4 mb-4 text-left">Акция недели</h4>
                    <vCardProductElement
                        :card_item="HOME_DATA.promotion"    
                    ></vCardProductElement> -->
        </v-col>
      </v-row>
    </div>
    <div
      class="v-home-popular-categories mb-4"
      v-if="HOME_DATA.popular_categories"
    >
      <h4 class="text-h4 mb-4 text-left">Популярные категории</h4>
      <v-row>
        <vCardCategoryElement
          v-for="card_item in HOME_DATA.popular_categories"
          :key="card_item.id"
          :card_item="card_item"
        ></vCardCategoryElement>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import vCarouselElement from "@/components/Carousels/v-base-carousel.vue";
// import vCardProductElement from './v-card-product.vue'
import vCardCategoryElement from "@/blocks/v-card-category.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-home",
  components: {
    vCarouselElement,
    // vCardProductElement,
    vCardCategoryElement,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapGetters(["HOME_DATA"]),
  },
  methods: {
    ...mapActions(["GET_HOME_DATA_FROM_API"]),
  },
  mounted() {
    this.GET_HOME_DATA_FROM_API();
  },
};
</script>

<style lang="scss"></style>
