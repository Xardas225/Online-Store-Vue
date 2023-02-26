<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__image" v-bind:src=" require(`../assets/images/${product_data.image}`) " v-bind:alt="product_data.name">
        <div class="v-catalog-item__name">
            {{ product_data.name }}
        </div>
        <div class="v-catalog-item__price">
            Price: {{ product_data.price }}
        </div>
        <button class="v-catalog-item__add_to_cart_btn" @click="sendArticleToParent">add to cart</button>
    </div>
</template>

<script>

export default {
    name: 'v-catalog-item',
    components: {},
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            title: 'Catalog item'
        }
    },
    methods: {
        sendArticleToParent() {
            this.$emit('sendArticle', this.product_data.article)
        }
    }
}

</script>

<style lang="scss">
.v-catalog-item {
    margin: 20px;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 2px 6px 2px #f5f5f5;
    div {
        padding: 10px;
    }
    &__image {
        max-width: 100px;
        max-height: 100px;
    }
}
</style>