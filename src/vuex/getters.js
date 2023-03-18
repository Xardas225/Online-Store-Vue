const getters = {
    PRODUCTS(state) {
        return state.products;
    },
    CART(state) {
        return state.cart;
    },
    HOME_DATA(state) {
        return state.home_data;
    },
    USERS(state) {
        return state.users;
    },
    WISHLIST(state) {
        return state.wishlist;
    },
    FILTERS_DATA(state) {
        return state.filters_data;
    }
}

export default getters