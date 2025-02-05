import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true, //쿠키 자동 전송
    headers:{
        'Content-Type': "application/json",
    }
});

export default apiClient;