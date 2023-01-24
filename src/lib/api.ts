import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://192.168.1.104:3000/v1/',
});

api.interceptors.request.use((config) => {
    console.log('Request: ', config);

    return config;
});
