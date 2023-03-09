<template>
    <v-card height="500">
        <v-img
            height="350"
            :src="require(`../assets/images/${card_item.image}`)"
            cover
        ></v-img>
        
        <v-card-title>
            <h3 class="text-h4">{{ card_item.title }}</h3>
        </v-card-title>
        
        <v-card-text>
            <p class="text-body-1">{{ card_item.price }}</p>
        </v-card-text>

        <v-card-text>
            <p class="text-body-1">{{ card_item.desc }}</p>
        </v-card-text>
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
    }
}
</script>

<style lang="scss" scoped>
.v-card {
    box-shadow: rgba(30, 31, 33, 0.12) 0px 5px 25px;
}
</style>