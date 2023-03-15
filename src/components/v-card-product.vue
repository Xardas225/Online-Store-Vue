<template>
    <v-card class="v-card-product d-flex align-start px-2 py-2">
        <v-row>
            <v-col md="3" class="d-flex justify-center align-center">
                <v-img
                class="h-100"
                    :src="require(`../assets/images/${card_item.image}`)"
                    cover
                ></v-img>
            </v-col>
        
            <v-col md="5">
                <div>
                    <v-card-title class="text-left text-wrap">
                        <h6 class="text-h6">{{ card_item.title }}</h6>
                    </v-card-title>

                    <v-card-text class="text-wrap">
                        <p class="text-body-1">{{ card_item.desc }}</p>
                    </v-card-text>
                </div>
            </v-col>

            <v-col md="4">
                <div class="d-flex flex-column justify-center align-center">
                    <v-card-text>
                        <p class="v-card-product__price text-body-1">{{ card_item.price }} ₽</p>
                    </v-card-text>
                    <div class="v-card-product__btn__wrapper">
                        <v-btn class="v-card-product__btn__buy w-100" 
                            @click="addToCart"
                        >
                            Купить
                        </v-btn>
                        <v-btn class="v-card-product__btn__wishlist"
                            @click="addToWishlist"
                        >
                        <svg-icon 
                            type="mdi" 
                            :path="mdiHeartOutline" 
                            class="d-block"
                            color="black"
                        ></svg-icon>
                        </v-btn>
                    </div>
                </div>
                
            </v-col>
        </v-row>
    </v-card>
</template>


<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeartOutline } from '@mdi/js';

export default {
    name: 'v-card-product',
    components: {
        SvgIcon
    },
    props: {
        card_item: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            mdiHeartOutline:mdiHeartOutline
        }
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
.v-card-product {
    &__price {
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
    }
    &__btn__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
    }
    &__btn__buy {
        font-size: 10px;
        margin-bottom: 10px;
        max-width: 100px;
        margin-right: 5px;
    }
    &__btn__wishlist {
        
    }
}

</style>