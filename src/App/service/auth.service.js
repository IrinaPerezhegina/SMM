import axios from "axios";
import localStorageService from "./localStorage.service";
import config from "../config.json";

const httpAuth = axios.create({
    baseURL: config.apiEndpoint
});

const authService = {
    register: async (payload) => {
        const { data } = await httpAuth.post(`register/`, payload);
        return data;
    },
    login: async ({ username, password }) => {
        const { data } = await httpAuth.post(`login/`, { username, password });
        return data;
    },
    token: async ({ username, password }) => {
        const { data } = await httpAuth.post("token/", { username, password });
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post("token/refresh/", {
            refresh: localStorageService.getRefreshToken()
        });
        return data;
    }
};
export default authService;
