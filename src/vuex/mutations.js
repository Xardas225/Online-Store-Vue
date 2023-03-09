const mutations = {
    SET_PRODUCTS_TO_STATE(state, products) {
        state.products = products
    },
    SET_HOME_DATA_TO_STATE(state, data) {
        state.home_data = data
    },
    SET_CART(state, product) {
        state.cart.push(product)
    },
    DELETE_FROM_CART(state, index) {
        state.cart.splice(index,1)
    }
}

export default mutations;