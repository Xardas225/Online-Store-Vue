<template>
    <v-col class="md-4">
        <router-link :to="{name: card_item.belong}">
            <v-card height="300">
                <v-img
                    height="200"
                    :src="require(`../assets/images/${card_item.image}`)"
                    cover
                ></v-img>
                
                <v-card-title>
                    <h3 class="text-h4">{{ card_item.title }}</h3>
                </v-card-title>

            </v-card>
        </router-link>
    </v-col>
</template>

<script>
export default {
    name: 'v-card-category',
    props: {
        card_item: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>