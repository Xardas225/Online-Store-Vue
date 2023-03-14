<template>
    <v-container>
        <v-row>
            <v-col md="4">
                <vFilters @applyFilters="applyFilters" @resetFilters="resetFilters"></vFilters>
            </v-col>
            <v-col md="8">
                <vSort @applySort="applySort"></vSort>
                <vCardProduct
                    v-for="card_item in modifiedProducts"
                    :key="card_item.article"
                    :card_item="card_item"
                    @addToCart="addToCart"
                    class="mb-4"
                >
                </vCardProduct>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import vFilters from './v-filters.vue';
import vCardProduct from './v-card-product.vue';
import vSort from './v-sort.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-catalog',
    components: {
        vFilters,
        vCardProduct,
        vSort
    },
    props: {},
    data() {
        return {
            filters: '',
            filtersProducts: [],
            sortedProducts: ''
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS', 
            'CART'
        ]),
        modifiedProducts() {
            if(this.filters)
            {
                return this.filtersProducts;
            }
            return this.PRODUCTS;
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        applyFilters(filters) {
            this.filters = filters;
            this.filtersProducts = [];
            if(!filters)
                return;
            this.PRODUCTS.map(product=> {
                for(let filter in filters) {
                    if(product[filter] !== filters[filter])
                        return;
                }
                this.filtersProducts.push(product);
            })
            if(filters && this.filtersProducts.length === 0)
                this.filtersProducts = [];
        },
        resetFilters() {
            this.filters = '';
            this.filtersProducts = [];
        },
        applySort() {
            // console.log(sortData);
            // switch(true) {
            //     case sortData === 'По названию':
            //         break;
            //     case sortData === 'По цене': 
            //         this.filtersProducts.sort((a,b)=>a.price > b.price)
            //         break;
            // }
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