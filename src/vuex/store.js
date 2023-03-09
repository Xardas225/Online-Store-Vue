import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

const store = createStore({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
})

export default store;