const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../../Views/Login/Login.vue"),
    },
];
export default routes;
