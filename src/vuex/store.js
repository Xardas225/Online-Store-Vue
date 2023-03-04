import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state: {
        products: [], 
        cart: []
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            })
            .catch((error)=>{
                console.log(error);
                return error;
            })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('DELETE_FROM_CART', index)
        }   
    },
    mutations: {
        SET_PRODUCTS_TO_STATE(state, products) {
            state.products = products
        },
        SET_CART(state, product) {
            state.cart.push(product)
        },
        DELETE_FROM_CART(state, index) {
            state.cart.splice(index,1)
        }
    },
    
})

export default store;