<template>
    <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows="hover"
    >
        <v-carousel-item
        v-for="item in carousel_items"
        :key="item.id"
        :src="require(`@/assets/images/${item.image}`)"
        cover
        >
    </v-carousel-item>
    </v-carousel>
</template>

<script>

export default {
    name: 'v-base-carousel',
    components: {},
    props: {
        carousel_items: {
            type: Array,
            dafault() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {}
}
</script>

<style lang="scss">
.v-carousel {
    box-shadow: rgba(30, 31, 33, 0.12) 0px 5px 25px;
    border-radius: 4px;
}
</style>