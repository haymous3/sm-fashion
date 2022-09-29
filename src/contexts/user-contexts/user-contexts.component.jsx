import { createContext, useState, useEffect } from "react";
import { authListeners, createUserProfile, getUserData } from "../../utlities/firebase/firebase";


export const UserContexts = createContext({
    currentUsers:null,
    setCurrentUsers: () => null,
    userDetails : {},
    setUserDetails: () => {}
})


export const UserProviders = ({children}) => {
    const [currentUsers, setCurrentUsers] = useState(null)
    const [userDetails, setUserDetails] = useState({})

    

    useEffect(() => {
        const unSucbribe = authListeners((user) => {
            if(user){
                createUserProfile(user)
                
            }
            console.log(user)
            setCurrentUsers(user)
            
            
        } )

        return unSucbribe
    }, [])

    useEffect(() => {
        const userdata = async() => {
            const theData = await getUserData(currentUsers)
            console.log(theData)
            setUserDetails(theData)
        }

        userdata()
    }, [currentUsers])

    const value = {currentUsers, setCurrentUsers, userDetails}

    return <UserContexts.Provider value={value}>{children}</UserContexts.Provider>
}