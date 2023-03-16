<template>
  <v-container>
    <h4 class="text-h4 mb-4">Users</h4>
    <vTable :user_data="USERS" />
  </v-container>
</template>

<script>
import vTable from "../blocks/v-table-users.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-users",
  components: {
    vTable,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
  },
  mounted() {
    this.GET_USERS_FROM_API();
  },
};
</script>

<style></style>
