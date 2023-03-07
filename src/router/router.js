import { createRouter, createWebHistory } from "vue-router"
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vForMen from '../components/v-catalog-for-men'
import vForWomen from '../components/v-catalog-for-women'
import vHome from '../components/v-home'

const routes = [
    {
        path: '/',
        name: 'home', 
        component: vHome,
        props: true
    },
    {
        path: '/catalog',
        name: 'catalog', 
        component: vCatalog,
        props: true
    },
    {
        path: '/cart',
        name: 'cart', 
        component: vCart,
        props: true
    },
    {
        path: '/for_men',
        name: 'for_men', 
        component: vForMen,
        props: true
    },
    {
        path: '/for_women',
        name: 'for_women', 
        component: vForWomen,
        props: true
    }
]

const router = new createRouter({
    history : createWebHistory(),
    routes : routes
})


export default router;

