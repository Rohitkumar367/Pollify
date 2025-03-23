import React, { useContext, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import useUserAuth from '../../hooks/useUserAuth';
import { UserContext } from '../../context/UserContext';
import { POLL_TYPE } from '../../utils/Data';
import OptionInput from '../../components/input/OptionInput';

const CreatePoll = () => {

    useUserAuth();

    const {user} = useContext(UserContext);

    const[pollData, setPollData]=useState({
        question: "",       //string
        type: "",           //string
        options: [],        //array
        imageOptions: [],   //array
        error: "",          //string
    })

    const handleValueChange=(key, value)=>{
        setPollData((prevData)=>({
            ...prevData,
            [key]: value,
        }))
    }

    return (
        <DashboardLayout activeMenu="Create Poll">
            <div className='bg-gray-100/80 my-5 p-5 rounded-lg mx-auto'>

                <h2 className="text-lg text-black font-medium">Create Poll</h2>

                <div className='mt-3'>
                    <label className='text-xs font-medium text-slate-600'>QUESTION</label>

                    <textarea
                        placeholder="What's in your mind..."
                        className='w-full text-[13px] text-black outline-none bg-red-100/40 p-2 rounded-md mt-2'
                        rows={4}
                        value={pollData.question}
                        onChange={({target})=>handleValueChange("question", target.value)}
                    ></textarea>
                </div>

                <div className='mt-3'>
                    <label className='text-xs font-medium text-slate-600'>POLL TYPE</label>

                    <div className='flex gap-4 flex-wrap mt-3'>
                        {POLL_TYPE.map((item, index)=>{
                            return (
                                <div 
                                    key={index}
                                    className={`option-chip ${pollData.type===item.value ? "text-white bg-primaryLight2 border-primaryLight2" : "border-sky-100"}`
                                    }
                                    onClick={()=>{
                                        handleValueChange("type", item.value)
                                    }}
                                >
                                    {item.value}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {pollData.type==="single-choice" && (
                    <div className='mt-5'>
                        <label className='text-xs font-medium text-slate-600'>OPTIONS</label>

                        <div className='mt-3'>
                            <OptionInput
                                optionList={pollData.options}
                                setOptionList={(value)=>{
                                    handleValueChange("options", value)
                                }}
                            />
                        </div>
                    </div>
                )}

            </div>
        </DashboardLayout>
    )
}

export default CreatePoll

