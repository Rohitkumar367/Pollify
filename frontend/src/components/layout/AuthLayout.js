import React, { useState } from 'react'
import Button from './Button'

const AuthLayout = ({children}) => {

    const[show, setShow] = useState({
        sign:false,
        log:false,
        guest:false
    })

    return (
        <div className='flex flex-col sm:flex-row w-screen h-screen items-center justify-center'>
            <div className='bg-red-300 px-8 py-8 md:px-12 md:py-12 sm:px-10 sm:py-10'>
                here
            </div>
            <div className='px-8 py-5 flex flex-col justify-center items-center'>
                <div className='font-myFont text-4xl md:text-5xl lg:text-7xl text-green-600 relative tracking-[5px]'>
                    POLLIFY
                </div>
                <div className='mt-1 flex gap-2 text-[15px]'>
                    <Button>Login</Button>
                    <Button>signUp</Button>
                    <Button>Login as Guest</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
