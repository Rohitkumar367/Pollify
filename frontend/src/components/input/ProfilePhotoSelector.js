import React, { useRef, useState } from 'react'
import {LuUser, LuUpload, LuTrash} from "react-icons/lu"

const ProfilePhotoSelector = ({profilePic, setProfilePic}) => {

    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setProfilePic(file); //update the image state

            const preview = URL.createObjectURL(file);//Generate preview URL from the file

            setPreviewUrl(preview);
        }

    }
    
    const handleRemoveImage = () => {
        setProfilePic(null);
    }

    const onChooseFile = () => {
        inputRef.current.click();
    }

    return (
        <div className='flex justify-center md:mb-6'>
        
            <input
                type='file'
                accept='image/*'
                ref={inputRef}
                onChange={handleImageChange}
                className='hidden'
            />

            
            {!profilePic ? 
                <div className='w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-red-700 rounded-full relative'>
                    <LuUser className="text-2xl md:text-4xl text-green-600" />

                    <button type="button" className='w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-green-600 text-white rounded-full absolute -bottom-1 -right-1' onClick={onChooseFile}>
                        <LuUpload/>
                    </button>
                </div>
                :
                <div className='relative'>
                    <img
                        src={previewUrl}
                        alt="profile photo"
                        className='w-14 h-14 md:w-20 md:h-20 rounded-full object-cover'
                    />

                    <button type='button' className='w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-red-700 text-white rounded-full absolute -bottom-1 -right-1' onClick={handleRemoveImage}>
                        <LuTrash/>
                    </button>
                </div>
            }

        </div>
    )
}

export default ProfilePhotoSelector
