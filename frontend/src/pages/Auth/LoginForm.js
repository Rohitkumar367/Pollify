import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthInput from '../../components/input/AuthInput';
import { validateEmail } from '../../utils/helper';
import { useAuthStore } from '../../store/allStore';
import { UserContext } from '../../context/UserContext';

const LoginForm = ({setActiveForm}) => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState(null);

    const {updateUser} = useContext(UserContext);
    const {login} = useAuthStore();
    
    const navigate = useNavigate();

    // handle login form submit
    const handleLogin = async(e)=>{
        e.preventDefault()

        if(!validateEmail(email)){
            setError("Please enter a valid email address.")
            return
        }

        if(!password){
            setError("Please enter the password")
            return
        }

        setError("");

        // login api handle
        try {
            const userData = await login(email, password);
            updateUser(userData);
            navigate('/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again later.");
        }
    }

    return (
        <div className='flex flex-col justify-center'>

            <h3 className='text:xl md:text-4xl font-semibold text-black'>Welcome Back</h3>

            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Please Enter Your Details To LogIn
            </p>

            <form onSubmit={handleLogin}>

                <AuthInput
                    value={email}
                    onChange={({target})=>setEmail(target.value)}
                    label="Email Address"
                    placeholder="mrddroid@gmail.com"
                    type="text"
                />
                <AuthInput
                    value={password}
                    onChange={({target})=>setPassword(target.value)}
                    label="Password"
                    placeholder="Min 8 chracters"
                    type="password"
                />
            
                {error && <p className='text-red-700 font-bold text-xs pb-2.5'>{error}</p>}

                <div className='flex gap-5'>
                    <button type="submit" className='btn-primary'>
                        LOGIN
                    </button>
                    <button onClick={()=>setActiveForm("none")} className='btn-primary bg-red-700 hover:border-2 border-red-700 hover:text-red-700'>
                        CLOSE
                    </button>
                </div>

                <p className='text-[13px] text-slate-800 mt-3'>
                    Don't have an account?{" "}
                    <Link className='font-medium text-green-600 hover:underline inline-block hover:scale-105' onClick={()=>setActiveForm("guest")}>
                        SignUp
                    </Link>
                </p>

            </form>

        </div>
    )
}

export default LoginForm
