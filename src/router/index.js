import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import AdminView from '../views/AdminView.vue'
import Profile from '../components/User/Profile.vue'
import Home from '../components/Home.vue'
import store from '../store'
import getUser from '../exports/user'

const routes = [{
        path: '/',
        name: 'LandingPage',
        component: LandingPageView,
        meta: { auth: false }
    },
    {
        path: '/login',
        name: 'Login',
        component: AuthorizationView,
        meta: { auth: false }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { auth: true },
        children: [{
                path: '/profile/my_program',
                name: 'MyProgram',
                component: () =>
                    import ('../components/User/MyProgram.vue')
            },
            {
                path: '/profile/my_details',
                name: 'MyDetails',
                component: () =>
                    import ('../components/User/MyDetails.vue')
            }
        ],
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { auth: true }
    },
    {
        path: '/plans',
        name: 'Plans',
        component: () =>
            import ('../components/AdminComponents/ListComponents/PlansComponent.vue'),
        meta: { auth: true },
    },
    {
        path: '/plans/:id',
        name: 'editPlan',
        component: () =>
            import ('../components/AdminComponents/EditComponents/SinglePlan.vue'),
        meta: { auth: true }
    },
    {
        path: '/exercises',
        name: 'Exercises',
        meta: { auth: true },
        component: () =>
            import ('../components/AdminComponents/ListComponents/ExercisesComponent.vue'),
        children: [{
            path: '/exercises/:id',
            name: 'editExercise',
            component: () =>
                import ('../components/AdminComponents/EditComponents/SingleExercise.vue')
        }]
    },
    {
        path: '/admin',
        name: 'AdminView',
        component: AdminView,
        meta: { auth: true },
        children: [{
            path: '/admin/users',
            name: 'AdminManageUsers',
            component: () =>
                import ('../components/AdminComponents/ListComponents/adminEditUsers.vue'),
            children: [{
                path: '/admin/users/:id',
                name: 'editUser',
                component: () =>
                    import ('../components/AdminComponents/EditComponents/SingleUser.vue')
            }]
        }],
    },
    {
        path: '/plans/create-plan',
        name: 'createPlan',
        meta: { auth: true },
        component: () =>
            import ('../components/SharedComponents/CreatePlan.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'router-link-active'
})

router.beforeEach(async(to, from, next) => {
    let res = await getUser()

    if (to.meta.auth == true) {
        if (res) {
            next()
        } else {
            next('Login')
        }
    } else {
        next()
    }
})

export default router