import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import AuthorizationView from '../views/AuthorizationView.vue'
import AdminView from '../views/AdminView.vue'
import Profile from '../components/User/Profile.vue'
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
        path: '/profile',
        name: 'Profile',
        component: Profile,
        children:[
          {
            path: '/profile/my_program',
            name: 'MyProgram',
            component: () => import('../components/User/MyProgram.vue')
          },
          {
            path: '/profile/my_details',
            name: 'MyDetails',
            component: () => import('../components/User/MyDetails.vue')
          }
        ]
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
    },
    {
      path: '/plans/:id',
      name: 'editPlan',
      component: () => 
          import ('../components/AdminComponents/EditComponents/SinglePlan.vue')
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
    routes,
    linkActiveClass: 'router-link-active'
})
export default router