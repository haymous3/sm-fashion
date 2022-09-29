import { createContext, useState } from "react"



const NAV_DETAILS_ONE = [
    {
        id:1,
        home:'home',
        about:'about us',
        shop:'shop'

    }
]



export const NavContents = createContext({
    generalNav: '',
    isNavOpen: false,
    setIsNavOpen: () => {}
   
})



export const NavProvider = ({children}) => {

    const [generalNav] = useState(NAV_DETAILS_ONE)
    const [isNavOpen, setIsNavOpen] = useState(false)
   

    const value = {generalNav, isNavOpen, setIsNavOpen}


    return <NavContents.Provider value={value}>{children}</NavContents.Provider>
}