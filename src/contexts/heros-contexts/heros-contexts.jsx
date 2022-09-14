import { useState } from "react";
import { FOOTERDETAILS, SHOPHERODETAILS } from "../../header-footer";

import { createContext } from "react";


export const HeroContexts = createContext({
    footerdetails:'footerdetails',
    shopherodetails:'shopherodetails'

}) 


export const HeroProviders = ({children}) => {

    const [footerdetails] = useState(FOOTERDETAILS)
    const [shopherodetails] = useState(SHOPHERODETAILS)


    const value = {footerdetails, shopherodetails}


    return <HeroContexts.Provider value={value}>{children}</HeroContexts.Provider>
}