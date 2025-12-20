import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL: "https://backend-1-tcsf.onrender.com/api"
});

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>Promise.reject(error)
)

export default api;