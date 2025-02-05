import React, { useState, useNavigate } from 'react'
import AuthInput from '../../components/input/AuthInput';

const LoginForm = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async()=>{

    }

    return (
        <div className='lg:w-[100%] h-3/4 md:h-full flex flex-col justify-center'>
            <h3 className='text:xl md:text-4xl font-semibold text-black'>Welcome Back</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Please Enter Your Details To LogIn
            </p>

            <form onSubmit={handleSubmit}>
                <AuthInput
                    value={email}
                    onChange={({target})=>setEmail(target.value)}
                    label="Email Address"
                    placeholder="mrddroid@gmail.com"
                    type="text"
                />
            </form>
        </div>
    )
}

export default LoginForm
