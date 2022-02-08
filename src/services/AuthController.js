import axios from "axios";
import store from "../store/index";
export default {
    async createNewUser(params) {
        const response = await axios.post(
            store.state.api + "auth/register",
            params
        );
        return response.data;
    },
    async login(params) {
        const response = await axios.post(
            store.state.api + "auth/authentication",
            params
        );
        return response.data;
    },
};
