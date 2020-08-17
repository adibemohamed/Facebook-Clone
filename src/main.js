import Vue from "vue";
import App from "./App.vue";
// import VueRouter from "vue-router";
// import Login from "./components/Login.vue";
// import Signup from "./components/Singup.vue";

// Vue.use(VueRouter);

Vue.config.productionTip = false;

// const router = [ 
//   { path: "/login", component: Login },
//   { path: "/signup", component: Signup },
// ];

new Vue({
  render: (h) => h(App),
  // router,
}).$mount("#app");
