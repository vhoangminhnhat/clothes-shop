import axios from 'axios';

const api = axios.create({
    baseURL: "",
    timeout: 30000,
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if(token){
            config.headers.setAuthorization(`Bearer ${token}`)
        }
        return config;
    },
    (error) => Promise.reject(error),
);

api.interceptors.response.use(
    (response) => {
        return response?.data;
    },
    (error) => {
        if(error?.response?.status === 401){
            localStorage.removeItem("token")
        };
        return Promise.resolve(error?.data)
    }
);

export default api;