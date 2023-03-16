<template>
    <v-select
      class="mb-4"
      :label="select_data.label"
      :items="select_data.items"
      hide-details="auto"
    ></v-select>
</template>

<script>
export default {
    name: 'v-base-select',
    props: {
        select_data: {
            type: Object, 
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ]
        }
    }
}
</script>