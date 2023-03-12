<template>
    <v-container class="v-cart">
        <h1>Cart</h1>
        <vCardProductElement 
            v-for="(card_item, index) in CART"
            :key="card_item.article"
            :card_item="card_item"
            @deleteFromChart="deleteFromChart(index)"
        />
    </v-container>
</template>
<script>
import vCardProductElement from './v-card-product.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'v-cart',
    components: {
        vCardProductElement
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