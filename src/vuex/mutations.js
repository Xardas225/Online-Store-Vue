const mutations = {
    SET_PRODUCTS_TO_STATE(state, products) {
        state.products = products
    },
    SET_HOME_DATA_TO_STATE(state, data) {
        state.home_data = data
    },
    SET_TO_CART(state, product) {
        state.cart.push(product)
    },
    DELETE_FROM_CART(state, index) {
        state.cart.splice(index,1)
    },
    SET_USERS_TO_STATE(state, users) {
        state.users = users;
    },
    SET_TO_WISHLIST(state, product) {
        state.wishlist.push(product);
    }
}

export default mutations;