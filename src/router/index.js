import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import AdminView from '../views/AdminView.vue'
import TestHome from '../components/TestHome.vue'
import HomeLog from '../components/HomeLog.vue'

const routes = [{
        path: '/',
        name: 'LandingPage',
        component: LandingPageView,
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
        path: '/homelog',
        name: 'HomeLog',
        component: HomeLog,
    },
    {
      path: '/plans',
      name: 'Plans',
      component: () => import ('../components/AdminComponents/ListComponents/PlansComponent.vue'),
      children: [{
        path: '/plans/:id',
        name: 'editPlan',
        component: () => 
            import ('../components/AdminComponents/EditComponents/SinglePlan.vue')
    }]
    },
    {
      path: '/exercises',
      name: 'Exercises',
      component: () => import ('../components/AdminComponents/ListComponents/ExercisesComponent.vue'),
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
        component: () =>
          import ('../components/SharedComponents/CreatePlan.vue')    
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router