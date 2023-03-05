<template>
    <div class="v-catalog">
        <v-list class="v-col-1" lines="one">
            <v-list-item class="v-catalog__for_men">
                <router-link :to="{name:'for_men'}">
                    Мужское
                </router-link>
            </v-list-item>
            <v-list-item class="v-catalog__for_women">
                <router-link :to="{name:'for_women'}">
                    Женское
                </router-link>
            </v-list-item>
            <v-list-item class="v-catalog__to_cart">
                <router-link :to="{name:'cart'}">
                    Корзина
                </router-link>
            </v-list-item>
        </v-list>
        <div class="v-catalog__item__list v-row justify-center">
            <v-catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-catalog',
    components: {
        vCatalogItem
    },
    props: {},
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS', 
            'CART'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        }
    },
    watch: {},
    mounted () {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style scoped>
.v-catalog {
    display: flex;
}
</style>