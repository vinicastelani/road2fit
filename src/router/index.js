import store from "@/store/index.js";
import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../Views/NotFound/NotFound.vue"

import Login from "./Login/index"


Vue.use(VueRouter);

let routes = [
    { path: "*", component: NotFound },
];
routes = routes.concat(Login);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    next()
});

export default router;


