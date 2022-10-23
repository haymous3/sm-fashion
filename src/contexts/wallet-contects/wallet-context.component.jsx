import { createContext, useState } from "react";


export const WalletDetails = createContext({
    isTransfare: false,
    setIsTransfer: () => {}
})



export const WalletDetailsProvider = ({children}) => {
    const [isTransfare, setIsTransfer] = useState(false)


    const value = {isTransfare, setIsTransfer}


    return <WalletDetails.Provider value={value}>{children}</WalletDetails.Provider>
}