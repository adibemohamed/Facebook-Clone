import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        openSignIn: false,
        loggedUser: null
    },
    getters: {
        user: state => {
            return state.loggedUser;
        },
        isSignedIn: state => {
            return state.openSignIn;
        }
    },
    mutations: {
        setOpenSignIn(state, payload) {
            state.openSignIn = payload;
        },
        setUser(state, payload) {
            state.loggedUser = payload;
        }
    },
    actions: {}

})