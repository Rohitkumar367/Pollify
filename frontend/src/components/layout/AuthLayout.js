import React, { useState } from 'react'
import Button from './Button'
import LoginForm from '../../pages/Auth/LoginForm';
import SignUpForm from '../../pages/Auth/SignUpForm';
import GuestLogin from '../../pages/Auth/GuestLogin';

const AuthLayout = () => {
    const[activeForm, setActiveForm] = useState("none");

    return (
        <div className='flex flex-col sm:flex-row w-screen h-screen items-center justify-center bg-red-50'>

            <div className='bg-red-300 rounded-lg px-4 py-4 md:px-7 md:py-7 sm:px-4 sm:py-4'>
                {activeForm==="none" ? (
                    <div className='text-5xl'>
                        <i className="fa-solid fa-comments"></i>
                    </div>
                ):(
                    <div>
                        {activeForm==="login" && <LoginForm onClose={()=>setActiveForm("none")} />}
                        {activeForm==="signup" && <SignUpForm onClose={()=>setActiveForm("none")} />}
                        {activeForm==="guest" && <GuestLogin onClose={()=>setActiveForm("none")} />}
                    </div>
                )}
            </div>

            <div className='px-8 py-5 flex flex-col justify-center items-center'>

                <div className='font-myFont text-4xl md:text-5xl lg:text-7xl text-green-600 relative tracking-[5px]'>
                    POLLIFY
                </div>

                <div className='mt-1 flex gap-2 text-[15px]'>
                    <Button onClick={()=>setActiveForm("login")} className={`${activeForm==="login"?"font-semibold":""}`} >Login</Button>
                    <Button onClick={()=>setActiveForm("signup")} className={`${activeForm==="signup"?"font-semibold":""}`}>signUp</Button>
                    <Button onClick={()=>setActiveForm("guest")} className={`${activeForm==="guest"?"font-semibold":""}`}>Login as Guest</Button>
                </div>

            </div>

        </div>
    )
}

export default AuthLayout
