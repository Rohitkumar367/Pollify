
import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


// request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if(error.response.status===401){
                console.error("Unauthorized - redirecting to login...");
                window.location.href = "/auth";
                localStorage.removeItem("token");
            }
            else if(error.response.status===500){
                console.error("Server error - please try again later");
            }
        } else if (error.code === "ECONNABORTED") {
            console.error("Request timeout - please try again");
        } else if (error.code === "ERR_NETWORK") {
            console.error("Network error - please check your connection");
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;
