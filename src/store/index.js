import { createStore, storeKey } from 'vuex'

export default createStore({
    state: {
        user: {
            isLoggedIn: false,
            user_id: '',
            role_id: ''
        },
    },
    getters: {
        checkIsLoggedIn(state) {
            return state.user.isLoggedIn
        },
        checkRole(state) {
            return state.user.role_id
        },
        checkUserId(state) {
            return state.user.user_id
        },
    },
    mutations: {
        SET_ISLOGGEDIN(state, payload) {
            state.user.isLoggedIn = payload
        },
        SET_ROLE(state, payload) {
            state.user.role_id = payload
        },
        SET_USERID(state, payload) {
            state.user.user_id = payload
        },
    },
    actions: {
        setLogin(store, payload) {
            store.commit('SET_ISLOGGEDIN', payload)
        },
        setRole(store, payload) {
            store.commit('SET_ROLE', payload)
        },
        setUserId(store, payload) {
            store.commit('SET_USERID', payload)
        }
    },
    modules: {}
})