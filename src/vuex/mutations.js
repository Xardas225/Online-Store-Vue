const mutations = {
    SET_PRODUCTS_TO_STATE(state, products) {
        state.products = products
    },
    SET_HOME_DATA_TO_STATE(state, data) {
        state.home_data = data
    },
    SET_TO_CART(state, product) {
        let isProductExists = false;
        product.quantity++;
        if(state.cart.length) {
            state.cart.map(elem=>{
                if(elem.article === product.article) {
                    isProductExists = true;
                }
            })
            if(!isProductExists) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    DELETE_FROM_CART(state, product) {
        let index = state.cart.findIndex(elem => elem.article==product.article);
        let currentProduct = state.cart[index];
        if(currentProduct.quantity===1)
        {
            currentProduct.quantity--;
            state.cart.splice(index,1)
        }
        else 
            currentProduct.quantity--;
    },
    SET_USERS_TO_STATE(state, users) {
        state.users = users;
    },
    SET_TO_WISHLIST(state, product) {
        state.wishlist.push(product);
    }
}

export default mutations;