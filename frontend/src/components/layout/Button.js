import React from 'react'

const Button = ({children, Click, className}) => {
    return (
        <button
            className={`px-3 uppercase border-2 border-red-300 bg-red-300 rounded-3xl text-[.5rem] sm:text-[1rem] hover:bg-transparent hover:scale-105 transition duration-150 ease-in-out ${className}`}
            onClick={Click}
        >
            {children}
        </button>
    )
}

export default Button
