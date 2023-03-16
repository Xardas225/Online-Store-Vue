<template>
    <div class="v-cart=item">
        <div class="v-cart-item__name">{{ cart_item_data.name }}</div>
        <button 
            class="v-cart-item__delete" 
            @click="deleteFromChart">
            Delete
        </button>
    </div>
</template>

<script>
export default {
    name: 'v-cart-item',
    components: {},
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromChart() {
            this.$emit('deleteFromChart')
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss">

</style>