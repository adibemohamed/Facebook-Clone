import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import Feed from './components/Feed.vue';
import Login from "./components/Login.vue";
import Signup from "./components/Singup.vue";
import store from './store/index'

Vue.use(VueRouter);

Vue.config.productionTip = false;

const isAuthenticated = false;

const router = new VueRouter({
  routes: [{
      path: "*",
      component: Feed,
      beforeEnter:(to, from, next) => {
       if(!isAuthenticated) {
         next('/login');
        }
        else {
          next('/');
        }
      }
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/singup",
      component: Signup
    },
  ]
})

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");