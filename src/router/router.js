import { createRouter, createWebHistory } from "vue-router"
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vForMen from '../components/v-catalog-for-men'
import vForWomen from '../components/v-catalog-for-women'
import vHome from '../components/v-home'
import vWishlist from '../components/v-wishlist'

import vCloth from '../components/catalog/v-cloth'
import vForHome from '../components/catalog/v-for-home'
import vShoes from '../components/catalog/v-shoes'
import vTech from '../components/catalog/v-tech'



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
    },
    {
        path: '/for_home',
        name: 'for_home', 
        component: vForHome,
        props: true
    },
    {
        path: '/cloth',
        name: 'cloth', 
        component: vCloth,
        props: true
    },
    {
        path: '/shoes',
        name: 'shoes', 
        component: vShoes,
        props: true
    },
    {
        path: '/tech',
        name: 'tech', 
        component: vTech,
        props: true
    },
    {
        path: '/wishlist',
        name: 'wishlist', 
        component: vWishlist,
        props: true
    }
]

const router = new createRouter({
    history : createWebHistory(),
    routes : routes
})


export default router;

