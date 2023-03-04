<template>
    <div class="v-main-wrapper">
        {{ title }}
        <v-catalog></v-catalog>
        <v-cart 
            v-if="CART.length" 
            :cart_data="CART"
            />
    </div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';
import { mapGetters } from 'vuex';

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
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {},
    watch: {},
    mounted () {
        
    }
}
</script>

<style lang="scss">
.v-main-wrapper {
    width: 100%;
}
</style>