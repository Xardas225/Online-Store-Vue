<template>
    <v-card height="250" class="d-flex align-start">
        <v-row>
            <v-col md="3">
                <v-img
                    height="350"
                    :src="require(`../assets/images/${card_item.image}`)"
                    cover
                ></v-img>
            </v-col>
        
            <v-col md="6">
                <div>
                    <v-card-title class="text-left text-wrap">
                        <h3 class="text-h4">{{ card_item.title }}</h3>
                    </v-card-title>

                    <v-card-text class="text-wrap">
                        <p class="text-body-1">{{ card_item.desc }}</p>
                    </v-card-text>
                </div>
            </v-col>

            <v-col md="3">
                <div class="d-flex flex-column justify-center align-center">
                    <v-card-text>
                        <p class="text-body-1">{{ card_item.price }} ₽</p>
                    </v-card-text>
                    <v-btn 
                        @click="addToCart"
                    >
                        В корзину
                    </v-btn>
                    <v-btn 
                        @click="addToWishlist"
                    >
                        В избранное
                    </v-btn>
                </div>
                
            </v-col>
        </v-row>
    </v-card>
</template>


<script>
export default {
    name: 'v-card-product',
    components: {},
    props: {
        card_item: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.card_item);
        },
        addToWishlist() {
            this.$emit('addToWishlist', this.card_item);
        }
    }
}
</script>

<style lang="scss" scoped>
.v-card {
    box-shadow: rgba(30, 31, 33, 0.12) 0px 5px 25px;
}
</style>