<template>
    <v-card class="mb-4 py-2 px-2">
        <div class="sort-wrapper">
            Сортировка:
            <v-select
                class="ml-4"
                variant="underlined"
                :items="['По названию', 'По цене']"
                v-model="sortData"
            ></v-select>
            <v-btn 
                color="red"
                class="ml-4"
                variant="outlined" 
                @click="applySort"
            >
                Сортировать
            </v-btn>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'v-sort',
    components: {},
    date() {
        return {
            sortData: ''
        }
    },
    methods: {
        applySort() {
            if(!this.$data.sortData)
                return;
            this.$emit('applySort', this.$data.sortData);
        }
    }
}
</script>

<style lang="scss" scoped>
.sort-wrapper {
    display: flex;
    align-items: center;
    justify-content: start;
    max-width: 50%;
}
</style>