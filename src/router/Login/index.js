import store from "@/store/index.js";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../../Views/Login/Login.vue"),
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
