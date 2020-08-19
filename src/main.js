import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Feed from "./components/Feed.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Singup.vue";
import store from "./store/index";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const isAuthenticated = store.state.openSignIn;

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      component: Login,
      name: "login",
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/singup",
      component: Signup,
      name: "signup",
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/",
      component: Feed,
      name: "home",
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/login" && !isAuthenticated) {
    next({
      name: "login",
    });
  }
  if (to.path == "/signup") {
    next({
      name: "signup",
    });
  }

  next();
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
