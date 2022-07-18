import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})