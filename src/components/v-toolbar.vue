
<template>
    <header class="v-toolbar v-toolbar--density-default v-theme--dark v-app-bar" style="top: 0px; z-index: 1004; transform: translateY(0%); position: fixed; left: 256px; width: calc(100% - 256px);"><!---->
    <div class="v-toolbar__content" style="height: 64px;">
        <button type="button" class="v-btn v-btn--icon v-theme--dark v-btn--density-default v-btn--size-default v-btn--variant-text v-app-bar-nav-icon">
            <span class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>
            <span class="v-btn__content" data-no-activator="">
                <i class="mdi-menu mdi v-icon notranslate v-theme--dark v-icon--size-default" aria-hidden="true"></i>
            </span>
        </button>
        <div class="v-toolbar-title">
            <div class="v-toolbar-title__placeholder">
                Application
            </div>
        </div>
    </div>
    </header>
</template>


<script>
export default {
    name: 'v-toolbar',
    components: {},
    data() {
        return {}
    },
    props: {},
    computed: {},
    methods: {}
}
</script>

<style lang="scss">

</style>