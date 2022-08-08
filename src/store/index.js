import { createStore, storeKey } from 'vuex'

export default createStore({
    state: {
        user: {
            isLoggedIn: false,
            role_id: ''
        },
    },
    getters: {
        checkIsLoggedIn(state) {
            return state.user.isLoggedIn
        },
        checkRole(state) {
            return state.user.role_id
        }
    },
    mutations: {
        SET_ISLOGGEDIN(state, payload) {
            state.user.isLoggedIn = payload
        },
        SET_ROLE(state, payload) {
            state.user.role_id = payload
        }
    },
    actions: {
        setLogin(store, payload) {
            store.commit('SET_ISLOGGEDIN', payload)
        },
        setRole(store, payload) {
            store.commit('SET_ROLE', payload)
        }
    },
    modules: {}
})