<template>
    <v-text-field
      :label="input_data.label"
      :rules="input_data.rules || rules"
      hide-details="auto"
    ></v-text-field>
</template>

<script>
export default {
    name: 'v-base-input',
    props: {
        input_data: {
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