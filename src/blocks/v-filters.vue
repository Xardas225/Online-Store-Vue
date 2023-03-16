<template>
  <div>
    <h4 class="text-h4 text-left mb-4">Фильтры</h4>
    <vSelect
      :select_data="this.select_data.category"
      v-model="category"
    ></vSelect>
    <vSelect :select_data="this.select_data.ram" v-model="ram"></vSelect>
    <vSelect
      :select_data="this.select_data.screen_type"
      v-model="screen_type"
    ></vSelect>
    <vSelect 
      :select_data="this.select_data.OS" 
      v-model="OS"
    ></vSelect>
    <v-btn color="red" variant="outlined" @click="applyFilters">
      Применить фильтры
    </v-btn>
    <v-btn class="ml-4" color="red" @click="resetFilters">
      Сбросить фильтры
    </v-btn>
  </div>
</template>

<script>
import vSelect from "@/components/FormInputs/v-base-select.vue";

export default {
  name: "v-filters",
  components: {
    vSelect,
  },
  data() {
    return {
      select_data: {
        category: {
          label: "Выберите категорию",
          items: ["Ноутбук", "Системный блок"],
        },
        ram: {
          label: "Объём оперативной памяти",
          items: ["4Гб", "8Гб", "16Гб", "32Гб"],
        },
        screen_type: {
          label: "Тип экрана",
          items: ["IPS", "OLED", "LED", "SV"],
        },
        OS: {
          label: "Операционная система",
          items: ["Windows", "Linux", "Без ОС"],
        },
      },
      category: "",
      ram: "",
      screen_type: "",
      OS: "",
    };
  },
  methods: {
    applyFilters() {
      let filters = {};
      for (let filter in this.$data) {
        if (filter === "select_data") continue;
        this.$data[filter] ? (filters[filter] = this.$data[filter]) : false;
      }
      this.$emit("applyFilters", filters);
    },
    resetFilters() {
      for (let filter in this.$data) {
        if (filter === "select_data") continue;
        this.$data[filter] = "";
      }
      this.$emit("resetFilters");
    },
  },
};
</script>

<style lang="scss"></style>
