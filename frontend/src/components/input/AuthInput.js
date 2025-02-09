import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"

const AuthInput = ({value, onChange, label, placeholder, type}) => {
    const [showPassword, setShowPassword] = useState(false);
    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='relative'>

            <label className='text-[13px] text-slate-800'>{label}</label>

            <div className='input-box'>
                <input
                    type={
                        type==="password"?(showPassword?"text":'password'):'text'
                    }
                    value={value}
                    onChange={(e)=>onChange(e)}
                    placeholder={placeholder}
                    className='w-full bg-transparent outline-none'
                />
            </div>

            {type==="password" && (<span className='absolute top-[27px] md:top-[35px] right-1 md:right-3 cursor-pointer text-gray-500'>
                {showPassword ? (
                    <FaRegEye
                        size={22}
                        className="text-primaryLight cursor-pointer"
                        onClick={()=>toggleShowPassword()}
                    />
                ):(
                    <FaRegEyeSlash
                        size={22}
                        className="text-slate-400 cursor-pointer"
                        onClick={()=>toggleShowPassword()}
                    />
                )}
            </span>)
            }

        </div>
    )
}

export default AuthInput
