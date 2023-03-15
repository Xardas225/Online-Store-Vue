<template>
    <v-card class="v-catalog-item d-flex flex-column justify-start align-start v-col-3 mx-2 my-2">
        <img class="v-catalog-item__image w-25" 
            v-bind:src=" require(`../assets/images/${product_data.image}`) " 
            v-bind:alt="product_data.name">
        <div class="v-catalog-item__name justify-start">
            {{ product_data.name }}
        </div>
        <div class="v-catalog-item__price">
            {{ product_data.price }} ₽
        </div>  
        <v-btn 
            class="v-catalog-item__add_to_cart_btn" 
            @click="addToCart"
            variant="tonal"
        >
            Добавить товар в корзину
        </v-btn>
    </v-card>
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
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    }
}

</script>

<style lang="scss">
.v-catalog-item {
    &__image {
        margin-bottom: 10px;
    }
    &__name {
        font-weight: 700;
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    &__price {
        padding: 2px 10px;
        border-radius: 5px;
        background-color: rgb(16, 196, 76);
        color: #fff;
        font-weight: 700;
        font-size: 1.5em;
        margin-bottom: 10px;
    }   
}
</style>