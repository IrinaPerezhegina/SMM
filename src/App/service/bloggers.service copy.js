import httpService from "./http.service";
// import localStorageService from "./localStorage.service";

const bloggersEndpoint = "/bloggers/";

const bloggersService = {
    getAll: async () => {
        const { data } = await httpService.get(bloggersEndpoint);
        return data;
    },
    getDzen: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "dzen/");
        return data;
    },
    getInstagram: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "instagram/");
        return data;
    },
    getLikee: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "likee/");
        return data;
    },
    getTelegram: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "telegram/");
        return data;
    },
    getTikTok: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "tiktok/");
        return data;
    },
    getTwitter: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "twitter/");
        return data;
    },
    getVk: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "vk/");
        return data;
    },
    getYouTube: async () => {
        const { data } = await httpService.get(bloggersEndpoint + "youtube/");
        return data;
    }
};

export default bloggersService;
