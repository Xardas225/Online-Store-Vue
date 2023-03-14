<template>
    <v-container>
        <vTable  :user_data="USERS"/>
    </v-container>
</template>


<script>
import vTable from './v-table-users.vue';
import { mapActions,mapGetters } from 'vuex';

export default {
    name: 'v-users',
    components: {
        vTable
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'USERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API'
        ])
    },
    mounted() {
        this.GET_USERS_FROM_API();
    }
}
</script>

<style>

</style>