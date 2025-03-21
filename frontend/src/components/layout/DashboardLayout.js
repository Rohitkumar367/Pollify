import React, { useContext } from 'react'
import Navbar from './Navbar'
import UserDetailsCard from '../card/UserDetailsCard'
import { UserContext } from '../../context/UserContext'
import SideMenu from './Sidemenu'

const DashboardLayout = ({children, activeMenu}) => {

    const {user} = useContext(UserContext);

    return (
        <div>

            <Navbar activeMenu={activeMenu}/>

            {user && 
            <div className="flex">
                <div className='max-[1080px]:hidden'>
                    <SideMenu activeMenu={activeMenu}/>
                </div>

                <div className='grow mx-5'>
                    {children}
                </div>

                <div className="w-[175px] hidden md:block mr-5">
                    <UserDetailsCard
                        profileImageUrl={user && user.profileImageUrl}
                        fullname={user && user.fullName}
                        username={user && user.username}
                        totalPollsVotes={user && user.totalPollsVotes}
                        totalPollsCreated={user && user.totalPollsCreated}
                        totalPollsBookmarked={user && user.totalPollsBookmarked}
                    />
                </div>
            </div>
            }

        </div>
    )
}

export default DashboardLayout
