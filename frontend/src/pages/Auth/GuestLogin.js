import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ProfilePhotoSelector from '../../components/input/ProfilePhotoSelector';
import AuthInput from '../../components/input/AuthInput';

const GuestLogin = ({setActiveForm}) => {
    const [profilePic, setProfilePic] = useState(null)
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // handle guest sign up form submit
    const handleGuest = (e)=>{
        e.preventDefault();

        if(!fullName){
            setError("Please enter the fullname")
            return;
        }    
        if(!email){
            setError("Please enter the email")
            return;
        }
        if(!username){
            setError("Please enter the username")
            return;
        }
        if(!password){
            setError("Please enter the password")
            return
        }

        setError("");
    }

    return (
        <div className='flex flex-col justify-center'>

            <h3 className='text:xl md:text-4xl font-semibold text-black'>Create Guest Account...</h3>    

            <p className='text-xs text-yellow-200 mt-[5px] mb-1 md:mb-6'>
                You can use your GUEST ACCOUNT to login next time.
            </p>
            
            <form onSubmit={handleGuest}>
                <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <div className='flex flex-col'>
                        <AuthInput
                            value={fullName}
                            onChange={({target})=>setFullName(target.value)}
                            label="Full Name"
                            placeholder="Roshan"
                            type="text"
                        />
                        {fullName && <p className='text-secondaryLight text-[10px] -mt-2 font-semibold'>
                            We request you to provide us a valid name.
                        </p>}
                    </div>

                    <AuthInput
                        value={email}
                        onChange={({target})=>setEmail(target.value)}
                        label="Email Address (Any Random/False)"
                        placeholder="mrddroid@gmail.com"
                        type="text"
                    />

                   <AuthInput
                        value={username}
                        onChange={({target})=>setUsername(target.value)}
                        label="Username"
                        placeholder="mr_r_roshan"
                        type="text"
                    />

                    <div className='flex flex-col'>
                        <AuthInput
                            value={password}
                            onChange={({target})=>setPassword(target.value)}
                            label="Password"
                            placeholder="Min 8 chracters"
                            type="password"
                        />
                        {/* {password && <p className='text-secondaryLight text-[10px] -mt-2 font-semibold'>
                            we request you to remember your password
                        </p>} */}
                    </div>

                    {error && <p className='text-red-700 font-bold text-xs pb-2.5'>{error}</p>}

                    <div className='flex gap-3 md:gap-5 m-0 p-0'>
                        <button type="submit" className='btn-primary'>
                            CREATE GUEST ACCOUNT
                        </button>
                        <button onClick={()=>setActiveForm("none")} className='btn-primary bg-red-700 hover:border-2 border-red-700 hover:text-red-700'>
                            CLOSE
                        </button>
                    </div>

                    <p className='text-[13px] text-slate-800 md:mt-3'>
                        Want to SignUp for Real?{" "}
                        <Link className='font-medium text-green-600 hover:underline inline-block hover:scale-105' onClick={()=>setActiveForm("signup")}>
                            SignUp
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default GuestLogin
