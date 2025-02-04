import React from 'react'
import Button from './Button'

const AuthLayout = ({children}) => {

    return (
        <div className='flex flex-col sm:flex-row w-screen h-screen items-center justify-center'>
            <div className='bg-red-300 px-4 py-4 md:px-7 md:py-7 sm:px-4 sm:py-4'>
                {children}
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
