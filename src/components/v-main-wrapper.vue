<template>
    <div class="v-main-wrapper">
        {{ title }}
        <v-catalog></v-catalog>
        <v-cart></v-cart>
    </div>
</template>

<script>
    import vCatalog from './v-catalog.vue';
    import vCart from './v-cart.vue';
    export default {
        name: 'v-main-wrapper',
        components: {
            vCatalog,
            vCart
        },
        props: {},
        data() {
            return {
                title: 'Main wrapper'
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted () {
            console.log('loaded')
        }
    }
</script>

<style lang="scss">
.v-main-wrapper {
    width: 100%;
}
</style>