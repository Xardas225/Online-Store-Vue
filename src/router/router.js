import { createRouter, createWebHistory } from "vue-router"
import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/v-cart'
import vHome from '../components/v-home'
import vWishlist from '../components/wishlist/v-wishlist'
import vUsers from '../components/users/v-users.vue'

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
        path: '/wishlist',
        name: 'wishlist', 
        component: vWishlist,
        props: true
    },
    {
        path: '/users',
        name: 'users', 
        component: vUsers,
        props: true
    }
]

const router = new createRouter({
    history : createWebHistory(),
    routes : routes
})


export default router;

