<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <vFilters
          @applyFilters="applyFilters"
          @resetFilters="resetFilters"
        ></vFilters>
      </v-col>
      <v-col md="8">
        <vSort @applySort="applySort"></vSort>
        <vCardProduct
          v-for="card_item in modifiedProducts"
          :key="card_item.article"
          :card_item="card_item"
          @addToCart="addToCart"
          @deleteFromCart="deleteFromCart"
          @addToWishlist="addToWishlist"
          class="mb-4"
        >
        </vCardProduct>
        <v-pagination v-model="pageNumber" :length="pageCount"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vFilters from "@/blocks/v-filters.vue";
import vCardProduct from "@/blocks/v-card-product.vue";
import vSort from "@/blocks/v-sort.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vFilters,
    vCardProduct,
    vSort,
  },
  data() {
    return {
      filters: "",
      filtersProducts: [],
      sortedProducts: "",
      productsPerPage: 5,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS","FILTERS_DATA"]),
    modifiedProducts() {
      return this.getProducts(this.PRODUCTS);
    },
    pageCount() {
      return Math.ceil(this.filtersProducts.length / 5);
    }
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART",
      "ADD_TO_WISHLIST",
      "DELETE_FROM_CART",
      "GET_FILTERS_FROM_API"
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    deleteFromCart(data) {
      this.DELETE_FROM_CART(data);
    },
    addToWishlist(data) {
      this.ADD_TO_WISHLIST(data);
    },
    applyFilters(filters) {
      this.filters = filters;
    },
    getProducts(products) {
      let from = (this.pageNumber - 1) * this.productsPerPage;
      let to = from + this.productsPerPage;

      if (!this.filters) {
        this.filtersProducts = products;
        return this.filtersProducts.slice(from, to);
      }

      this.filtersProducts = products.filter((product) => {
        return Object.keys(this.filters).every(
          (filter) => product[filter] === this.filters[filter]
        );
      });

      return this.filtersProducts.slice(from, to);
    },
    resetFilters() {
      this.filters = "";
      this.filtersProducts = this.PRODUCTS;
    },
    applySort() {
      // console.log(sortData);
      // switch(true) {
      //     case sortData === 'По названию':
      //         break;
      //     case sortData === 'По цене':
      //         this.filtersProducts.sort((a,b)=>a.price > b.price)
      //         break;
      // }
    },
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style scoped>
.v-catalog {
  display: flex;
}
</style>
