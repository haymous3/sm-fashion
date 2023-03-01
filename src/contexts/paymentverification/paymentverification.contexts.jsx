import {createContext, useState } from "react";



export const PaymentVerification = createContext({
    paywithwallet:false,
    setPaywithWallet:() => {}
});



export const PaymentVerificationProvider = ({children}) => {
    const [paywithwallet, setPaywithWallet] = useState(false)


    const value ={paywithwallet, setPaywithWallet}

    return <PaymentVerification.Provider value={value}>{children}</PaymentVerification.Provider>
}