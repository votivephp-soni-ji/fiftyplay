// src/utils/api.js
import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // replace with your API
    headers: {
        "Content-Type": "application/json",
    },
});

// 🔹 Interceptors (optional for auth token)
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const callApi = async (method, url, data = {}, params = {}) => {
    
        const response = await API({
            method,
            url,
            data,
            params,
        });
        return response.data;
    
};
