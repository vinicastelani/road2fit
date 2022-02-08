import store from "@/store/index.js";

const routes = [
    {
        path: "/register",
        name: "register",
        component: () => import("../../Views/Register/Register.vue"),
        beforeEnter: (to, from, next) => {
            if (!store.state.session.user) {
                next()
            } else {
                next({
                    path: "/home"
                })
            }
        }
    },
];
export default routes;
