<template>
    <div class="v-catalog">
        <v-catalog-item
            v-for="product in products"
            :key="product.article"
            v-bind:product_data="product"
            @sendArticle="showArticleInConsole"
        />
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';
    export default {
        name: 'v-catalog',
        components: {
            vCatalogItem
        },
        props: {},
        data() {
            return {
                products: [
                    {
                        "image": "1.jpg",
                        "name": "T-shirt 1",
                        "price": 2100.234234234,
                        "article": "T1",
                        "available": true,
                        "category": "Мужские"
                    },
                    {
                        "image": "1.jpg",
                        "name": "T-shirt 2",
                        "price": 2100.234234234,
                        "article": "T2",
                        "available": true,
                        "category": "Мужские"
                    },
                    {
                        "image": "1.jpg",
                        "name": "T-shirt 3",
                        "price": 2100.234234234,
                        "article": "T3",
                        "available": true,
                        "category": "Мужские"
                    }
                ]
                }
        },
        computed: {},
        methods: {
            showArticleInConsole(data) {
                console.log(data);
            }
        },
        watch: {},
        mounted () {}
    }
</script>

<style scoped>
.v-catalog {
    display: flex;
}
</style>