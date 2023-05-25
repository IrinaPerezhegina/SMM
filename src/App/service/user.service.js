import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userService = {
    get: async () => {
        const { data } = await httpService.get();
        return data;
    },
    delete: async () => {
        const { data } = await httpService.delete();
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(payload);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(payload);
        return data;
    },
    getUsername: async (payload) => {
        const { data } = await httpService.get(
            localStorageService.getUsername() + "/"
        );
        return data;
    }
};

export default userService;
