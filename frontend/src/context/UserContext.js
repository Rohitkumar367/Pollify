import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const[user, setUser] = useState(null);

    // function to update user data
    const updateUser = (newUserData)=>{
        setUser(newUserData);
    }

    // function to clear user data on logout
    const clearUser = ()=>{
        setUser(null);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

