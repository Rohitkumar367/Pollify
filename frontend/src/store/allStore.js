
import {create} from 'zustand';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

export const useAuthStore = create((set)=>({
    user: null,
    token: null,
    message: "",

    login: async (email, password)=>{
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {email, password});
            const {user, token} = response.data;

            localStorage.setItem("token", token);

            set({user, token, message: "Login successful"});

            return {user, token};
        } catch (err) {
            set({user: null, token: null, message: err.response?.data?.message || "Error logging in"});
            throw err
        }
    }
}))

