import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ProfilePhotoSelector from '../../components/input/ProfilePhotoSelector';
import AuthInput from '../../components/input/AuthInput';
import { validateEmail } from '../../utils/helper';
import { UserContext } from '../../context/UserContext';
import { useAuthStore } from '../../store/allStore';


const SignUpForm = ({setActiveForm}) => {
    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const {updateUser} = useContext(UserContext);
    const {signup, uploadImage} = useAuthStore();

    const navigate = useNavigate();

    // handle sign up form submit
    const handleSignUp = async (e) => { 
        e.preventDefault();

        if(!fullName){
            setError("Please enter the fullname")
            return;
        }    
        if(!email){
            setError("Please enter the email")
            return;
        }
        if(!validateEmail(email)){
            setError("Please enter a valid email address.")
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

        // signup api handle
        try {
            // upload image if present
            let profileImageUrl = "";
            if(profilePic){
                const imageResponse = await uploadImage(profilePic);
                profileImageUrl = imageResponse.imageUrl || "";
            }

            const userData = await signup(fullName, username, email, password, profileImageUrl);

            updateUser(userData);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || "something went wrong. Please try again later")
        }
    }

    return (
        <div className='flex flex-col justify-center'>

            <h3 className='text:xl md:text-4xl font-semibold text-black'>Create an Account</h3>    

            <p className='text-xs text-slate-700 mt-[5px] mb-1 md:mb-6'>
                Join us today by entering your destiny below.
            </p>
            
            <form onSubmit={handleSignUp}>

                <ProfilePhotoSelector profilePic={profilePic} setProfilePic={setProfilePic}/>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <div className='flex flex-col'>
                        <AuthInput
                            value={fullName}
                            onChange={({target})=>setFullName(target.value)}
                            label="Full Name"
                            placeholder="Roshan"
                            type="text"
                        />
                        {/* {fullName && <p className='text-secondaryLight text-[10px] -mt-2 font-semibold'>
                            We request you to provide us a suitable name.
                        </p>} */}
                    </div>

                    <AuthInput
                        value={email}
                        onChange={({target})=>setEmail(target.value)}
                        label="Email Address"
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
                            CREATE ACCOUNT
                        </button>
                        <button onClick={()=>setActiveForm("none")} className='btn-primary bg-red-700 hover:border-2 border-red-700 hover:text-red-700'>
                            CLOSE
                        </button>
                    </div>

                    <p className='text-[13px] text-slate-800 md:mt-3'>
                        Already have an account?{" "}
                        <Link className='font-medium text-green-600 hover:underline inline-block hover:scale-105' onClick={()=>setActiveForm("login")}>
                            LogIn
                        </Link>
                    </p>
                </div>
                
            </form>
        </div>
    )
}

export default SignUpForm
