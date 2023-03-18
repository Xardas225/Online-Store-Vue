<template>
  <v-card class="py-4 px-4">
    <h4 class="text-h4 text-left mb-4">Фильтры</h4>
    <v-list>
      <vFilterCheckbox
        v-for="filters_elem in FILTERS_DATA"
        :key="filters_elem.list.title"
        :filters_elem="filters_elem"
      >
      </vFilterCheckbox>
    </v-list>

    <v-btn color="red" variant="outlined" @click="applyFilters">
      Применить фильтры
    </v-btn>
    <v-btn class="ml-4" color="red" @click="resetFilters">
      Сбросить фильтры
    </v-btn>
  </v-card>
</template>

<script>
import vFilterCheckbox from '@/components/Filters/v-filter-checkbox.vue';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "v-filters",
  components: {
    vFilterCheckbox
  },
  data() {
    return {
      category    : [],
      ram         : [],
      screen_type : [],
      OS          : [],
      core_count  : []
    };
  },
  computed: {
    ...mapGetters(['FILTERS_DATA']),
    filters() {
      return this.filters_data;
    }
  },
  methods: {
    ...mapActions(['GET_FILTERS_FROM_API']),
    applyFilters() {
      let filters = {};
      for (let filter in this.$data) {
        if (filter === "data") continue;
        this.$data[filter] ? (filters[filter] = this.$data[filter]) : false;
      }
      this.$emit("applyFilters", filters);
    },
    resetFilters() {
      for (let filter in this.$data) {
        if (filter === "data") continue;
        this.$data[filter] = "";
      }
      this.$emit("resetFilters");
    },
  },
  mounted() {
    this.GET_FILTERS_FROM_API();
  }
};
</script>

<style lang="scss"></style>
