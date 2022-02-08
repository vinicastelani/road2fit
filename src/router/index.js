// import store from "@/store/index.js";
import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../Views/NotFound/NotFound.vue"
import Login from "./Login/index"
import Register from "./Register/index"
import Home from "./Home/index"

Vue.use(VueRouter);

let routes = [
    {
        path: "*", component: NotFound
    },
    {
        path: "/", beforeEnter: (to, from, next) => {
            next({
                path: "/home"
            })
        }
    },
];
routes = routes.concat(Login);
routes = routes.concat(Register);
routes = routes.concat(Home);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});



export default router;