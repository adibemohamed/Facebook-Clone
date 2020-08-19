import Vue from "vue";
import VueRouter from 'vue-router'
import Feed from './components/Feed.vue';
import Login from "./components/Login.vue";
import Signup from "./components/Singup.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
  
      {
        path: "/login",
        component: Login,
        name: 'login',
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/singup",
        component: Signup,
        name: 'signup',
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/",
        component: Feed,
        name: 'home',
        meta: {
          requiresAuth: true
        }
  
      }
    ]
  })
  

export default router;