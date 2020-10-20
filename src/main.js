import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;

const isAuthenticated = store.state.openSignIn;

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login' && !isAuthenticated) {
//     next({
//       name: 'login'
//     });
//   }
//   if (to.path == '/signup') {
//     next({
//       name: 'signup'
//     });
//   }

//     next();
// })

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
