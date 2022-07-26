import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import test_vezbe from '../views/test_vezbe.vue'
import AdminView from '../views/AdminView.vue'
import TestHome from '../components/TestHome.vue'
import store from '../store'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,

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
        component: AuthorizationView,

    },
    {
        path: '/testhome',
        name: 'TestHome',
        component: TestHome,

    },
    {
        path: '/admin',
        name: 'AdminView',
        component: AdminView,
        children: [{
                path: '/admin/manage-users',
                name: 'AdminManageUsers',
                component: () =>
                    import ('../components/AdminComponents/adminEditUsers.vue')
            },
            {
                path: '/admin/manage-plans',
                name: 'AdminManagePlans',
                component: () =>
                    import ('../components/AdminComponents/adminManagePlans.vue')
            },
            {
                path: '/admin/manage-exercises',
                name: 'AdminManageExercises',
                component: () =>
                    import ('../components/AdminComponents/adminManageExercises.vue')
            }
        ]
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

// router.beforeEach((to, from, next) => {
//     if (to.name == 'Home' && store.isLoggedIn != true) next({ name: 'Login' })
//     else next()
// })
export default router