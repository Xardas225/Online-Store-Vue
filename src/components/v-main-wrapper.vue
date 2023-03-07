<template>
        <main class="v-main v-main-wrapper" style="--v-layout-left: 256px; --v-layout-right: 0px; --v-layout-top: 64px; --v-layout-bottom: 0px;">
            <router-view></router-view>
        </main>
</template>

<script>
export default {
    name: 'v-main-wrapper',
    props: {},
    methods: {},
    watch: {},
}
</script>

<style lang="scss">
.v-main-wrapper {
    width: 100%;
}
</style>