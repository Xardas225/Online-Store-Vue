<template>
    <div class="v-cart">
        <h1>Cart</h1>
        <vCartItem 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromChart="deleteFromChart(index)"
        /> 
    </div>
</template>
<script>
import vCartItem from './v-car-item.vue'
import { mapActions } from 'vuex'

export default {
    name: 'v-cart',
    components: {
        vCartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromChart(index) {
            this.DELETE_FROM_CART(index)
        }
    },
    computed: {
        
    },
    data () {
        return {
            
        }
    }
}
</script>


<style>
 
</style>