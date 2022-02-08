import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        api: process.env.NODE_ENV == "development" ? "http://localhost:3000/" : "https://road2fit-api.vercel.app/",
        session: JSON.parse(localStorage.getItem("userData")) || {
            user: false,
            token: ""
        },
        message: {
            show: false,
            text: ""
        },
        loadingState: false
    },
    getters: {
        getShowMessage(state) {
            return state.message.data;
        },
        getLoggedIn(state) {
            return state.session;
        },
        getLoadingState(state) {
            return state.loadingState
        }
    },
    mutations: {
        updateMessage(state, message) {
            state.message = message;
        },
        updateUser(state, user) {
            localStorage.setItem("userData", JSON.stringify(user))
            state.session = user;
            window.location.reload();
        },
        updateLoadingState(state, payload) {
            state.loadingState = payload;
        },
    },

});