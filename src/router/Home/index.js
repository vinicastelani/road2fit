import store from "@/store/index.js";

const routes = [
    {
        path: "/home",
        name: "home",
        component: () => import("../../Views/Home/Home.vue"),
        beforeEnter: (to, from, next) => {
            if (store.state.session.user) {
                next()
            } else {
                next({
                    path: "/login"
                })
            }
        }

    },
];
export default routes;
