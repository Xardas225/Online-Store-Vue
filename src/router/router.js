import { createRouter, createWebHistory } from "vue-router"
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'


const routes = [
    {
        path: '/',
        name: 'catalog', 
        component: vCatalog ,
        props: true
    },
    {
        path: '/cart',
        name: 'cart', 
        component: vCart,
        props: true
    }
]

const router = new createRouter({
    history : createWebHistory(),
    routes : routes
})


export default router;

