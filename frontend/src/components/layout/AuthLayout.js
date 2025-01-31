import React from 'react'

const AuthLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen items-center justify-center'>
            <div className='w-[80%] sm:w-[40%] px-12 pt-8 pb-12 bg-red-300 border-4 border-red-500'>
                {children}
            </div>
            <div className='hidden sm:block px-8 py-5 border-4 border-red-500 '>
                <div className='font-myFont lg:text-7xl md:text-4xl sm:text-2xl'>
                    POLLIFY
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
