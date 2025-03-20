import React from 'react'

const StatsInfo = ({label, value}) => {
    return (
        <div className='text-center'>
            <p className='text-xs text-slate-700/80 mt-[2px]'>{label}: </p>
            <p className='font-medium text-gray-950'>{value}</p>
        </div>
    )
}

const UserDetailsCard = ({profileImageUrl, fullname, username, totalPollsVotes, totalPollsCreated, totalPollsBookmarked}) => {

    return (
        <div className='bg-slate-100/50 rounded-lg mt-16 overflow-hidden'>

            <div className='w-full h-32 bg-primaryLight2 flex justify-center relative'>
                <div className='absolute -bottom-10 rounded-full overflow-hidden border-2 border-primaryLight1'>
                    <img src={profileImageUrl || ""} alt="Profile Image" className='w-20 h-20 bg-slate-400 rounded-full'/>
                </div>
            </div>

            <div className="mt-12 px-5">
                <div className='text-center pt-1'>
                    <h5 className='text-lg text-gray-950 font-medium leading-6'>
                        {fullname}
                    </h5>
                    <span className='text-[13px] font-medium text-slate-700/60'>
                        @{username}
                    </span>
                </div>
            </div>

            <div className='my-4'>
                <StatsInfo label="Polls Created" value={totalPollsCreated}/>
                <StatsInfo label="Polls Voted" value={totalPollsVotes}/>
                <StatsInfo label="Polls Bookmarked" value={totalPollsBookmarked}/>
            </div>
        </div>
    )
}

export default UserDetailsCard
