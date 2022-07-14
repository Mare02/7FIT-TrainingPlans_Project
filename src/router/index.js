import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import test_vezbe from '../views/test_vezbe.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: AuthorizationView
    },
    {
        path: '/test',
        name: 'test_vezbe',
        component: test_vezbe
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router