<template>
    <v-checkbox :label="checkbox_data.label" :value="checkbox_data.value"></v-checkbox>
</template>

<script>
export default {
  name: "v-base-checkbox",
  props: {
    checkbox_data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-input {
  max-height: 40px;
}
</style>
