import { createRouter, createWebHistory } from "vue-router";
import vCatalog from '@/pages/v-catalog';
import vCart from '@/pages/v-cart';
import vHome from '@/pages/v-home';
import vWishlist from '@/pages/v-wishlist';
import vUsers from '@/pages/v-users.vue';
import vProfile from '@/pages/v-profile.vue';

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
    },
    {
        path: '/profile',
        name: 'profile', 
        component: vProfile,
        props: true
    }
]

const router = new createRouter({
    history : createWebHistory(),
    routes : routes
})


export default router;

