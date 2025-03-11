
import {create} from 'zustand';

const API_URL = process.env.NODE_ENV==="development" ? "http://localhost:5000/api/auth" : `${process.env.REACT_APP_BACKEND_URL}/api/auth`

const useAuthStore = create((set)=>({

}))

