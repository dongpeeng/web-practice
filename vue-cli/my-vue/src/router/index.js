import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Fe from '../views/Fe.vue'
import Rd from '../views/Rd.vue'
import User from '../views/User.vue'
import Detail from '../views/Detail.vue'
import Error from '../views/Error.vue'
import Test from '../views/Test.vue'
import Count from '../views/Count.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    alias:'/aa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/course',
    name: 'Course',
    component: Course,
    children:[{
      path: 'fe',
      name: 'Fe',
      component: Fe,
    },
    {
      path: 'rd',
      name: 'Rd',
      component: Rd,
    }

    ]
  },{
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/detail/:id/:price',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/test',
    // path: '/test/:id/:price',
    name: 'Test',
    component: Test,
    // redirect:'/',
    // redirect:'/detail/:id/:price',
    beforeEnter: (to, from, next) => {
      console.log('to',to);
      console.log('from',from);
      // console.log('next',next);
      next();
    }
  },
  {
    path: '/count',
    name: 'Count',
    component: Count,
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
   
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
