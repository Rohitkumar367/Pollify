
import {create} from 'zustand';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

export const useAuthStore = create((set)=>({
    isAuthenticated: false,

    login: async (email, password)=>{
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {email, password});

            const {user, token} = response.data;

            localStorage.setItem("token", token);
            console.log({token, user});
            
            return user;
        } catch (err) {
            throw err
        }
    },
    
    signup: async(fullName, username, email, password, profileImageUrl)=>{
        try {
            const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {fullName, username, email, password, profileImageUrl});
            
            const {user, token} = response.data;
            
            localStorage.setItem("token", token);
            console.log({token, user});

            return user;
        } catch (err) {
            throw err
        }
    },

    uploadImage: async(imageFile)=>{
        const formData = new FormData();
        formData.append('image', imageFile);
        try{
            const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
                headers:{
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log({response});

            return response.data;
        } catch(err){
            console.error("Error uploading the image:", err);
            throw err;
        }
    },
}))

