<template>
    <div>
        <h4 class="text-h4 text-left mb-4"> 
            Фильтры
        </h4>
        <v-select
            label="Рейтинг"
            v-model="rating"
        ></v-select>
        <v-select
            label="Объём оперативной памяти"
            :items="['4Гб', '8Гб', '16Гб', '32Гб']"
            v-model="ram"
        ></v-select>
        <v-select
            label="Тип экрана"
            :items="['IPS', 'OLED', 'LED', 'SV']"
            v-model="screen_type"
        ></v-select>
        <v-select
            label="OS"
            :items="['Windows', 'Linux', 'Без ОС']"
            v-model="OS"
        ></v-select>
        <v-btn 
            color="red" 
            variant="outlined" 
            @click="applyFilters"
        >
            Применить фильтры
        </v-btn>
        <v-btn 
            class="ml-4"
            color="red" 
            @click="resetFilters"
        >
            Сбросить фильтры
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'v-filters',
    components: {},
    data() {
        return {
            rating: '',
            ram: '',
            screen_type: '',
            OS: ''
        }
    },
    methods: {
        applyFilters() {
            let filters = {};
            for(let filter in this.$data)
            {
                this.$data[filter] ? filters[filter] = this.$data[filter] : false; 
            }
            this.$emit('applyFilters', filters);
        },
        resetFilters() {
            for(let filter in this.$data)
            {
                this.$data[filter] = ''; 
            }
            this.$emit('resetFilters');
        }
    }
}
</script>

<style lang="scss">

</style>