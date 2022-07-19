import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            isAdmin: localStorage.getItem('isAdmin'),
            isCoach: localStorage.getItem('isCoach')
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})