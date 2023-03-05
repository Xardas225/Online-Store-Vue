<template>
    <div class="v-cart">
        <h1>Cart</h1>
        <vCartItem 
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromChart="deleteFromChart(index)"
        /> 
    </div>
</template>
<script>
import vCartItem from './v-car-item.vue'
import { mapActions, mapGetters } from 'vuex'

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
            'DELETE_FROM_CART', 
        ]),
        deleteFromChart(index) {
            this.DELETE_FROM_CART(index)
        }
    },
    computed: {
        ...mapGetters([
            'CART', 
        ]),
    },
    data () {
        return {
            
        }
    },
    mounted() {
    }
}
</script>


<style>
 
</style>