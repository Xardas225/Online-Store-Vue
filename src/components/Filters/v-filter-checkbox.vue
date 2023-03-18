<template>
  <v-list-group>
    <template v-slot:activator="{ activator }">
      <v-list-item
        class="text-left"
        v-bind="activator"
        :title="filters_elem.list.title"
      ></v-list-item>
    </template>

    <v-list-item>
      <vBaseCheckbox
        v-for="item in filters_elem.data"
        :key="item.value"
        :checkbox_data="item"
        v-model="item.category"
      >
      </vBaseCheckbox>
    </v-list-item>
  </v-list-group>
</template>


<script>
import vBaseCheckbox from "@/components/FormInputs/v-base-checkbox.vue";

export default {
    name: 'v-filter-checkbox',
    props: {
        filters_elem: {
            type: Object, 
            default() {
                return {};
            }
        }
    },
    components: {
        vBaseCheckbox
    }
}
</script>
