import axios from "axios";

import store from "../store/index"
// import store from "../../store/index";
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    store.commit("updateLoadingState", true)
    return config;
}, function (error) {
    store.commit("updateLoadingState", false)
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    const res = response.data
    store.commit("updateMessage", {
        show: res.success,
        color: res.success ? "green" : "red",
        text: res.msg,
        timeout: 5000
    })
    store.commit("updateLoadingState", false)
    return response;
}, function (error) {

    store.commit("updateMessage", {
        show: true,
        color: "red",
        text: error.response.data.msg,
        timeout: 5000
    })
    store.commit("updateLoadingState", false)
    return Promise.reject(error);
});
