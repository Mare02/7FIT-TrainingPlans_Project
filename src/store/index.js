import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {
            isLoggedIn: false,
            isAdmin: false,
            isTrainer: false
        },
    },
    mutations: {},
    actions: {},
    modules: {}
})