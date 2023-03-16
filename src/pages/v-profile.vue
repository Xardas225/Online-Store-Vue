<template>
  <v-container>
    <vInput :input_data="this.name"></vInput>
  </v-container>
</template>

<script>
import vInput from "@/components/FormInputs/v-base-input.vue";

export default {
  name: "v-profile",
  components: {
    vInput,
  },
  data() {
    return {
      name: {
        label: "Введите имя",
      },
      password: {
        label: "Введите пароль",
      },
      email: {
        label: "Введите пароль",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
