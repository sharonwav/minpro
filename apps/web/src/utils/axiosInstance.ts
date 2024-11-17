import axios from "axios";
import authStore from "@/zustand/authStore";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
})

instance.interceptors.request.use(
    async request => {
        const token = authStore.getState().token;

        if(token) {
            request.headers['Authorization'] = `Bearer ${token}`
        }

        return request
    },
    error => {
        console.log(error)
    }
)

instance.interceptors.response.use(
    async response => {
        return response
    },
    error => {
        if(error?.response?.data?.message === 'jwt expired'){
            const setAuthSignOut = authStore.getState().setAuthSignOut;
            setAuthSignOut()
            toast.error('Your session is expired')
            setTimeout(() => {
                window.location.href = '/sign-in'
            })
        }

        return Promise.reject(error)
    }
)

export default instance;


