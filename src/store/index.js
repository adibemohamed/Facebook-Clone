import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        openSignIn: false
    },
    getters: {},
    mutations: {
        setOpenSignIn(state, payload) {
            state.openSignIn = payload;
        }
    },
    actions: {}

})