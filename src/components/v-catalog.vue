<template>
    <div class="v-catalog">
        <v-catalog-item
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @sendArticle="showArticleInConsole"
        />
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
                'PRODUCTS'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            showArticleInConsole(data) {
                console.log(data);
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