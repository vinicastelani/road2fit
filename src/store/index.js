import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // Variaveis
    state: {
        api: "",
        session: {
            user: "",
            token: "",
        },
        message: {
            type: "",
            data: "",
        },
    },
    getters: {
        showMessage(state) {
            return state.message.data;
        },
        loggedIn(state) {
            return state.session.token;
        },
    },
    mutations: {
        updateMessage(state, message) {
            state.message = message;
        },
        updateUser(state, user) {
            state.session.user = user;
        },
    },
});