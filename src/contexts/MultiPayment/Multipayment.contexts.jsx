import { createContext, useState } from "react";



export const MultiPayment = createContext({
    openpayment: false,
    setOpenPayment: () => {},
    openpayment_two: false,
    setOpenPayment_two: () => {}
})



export const MultiPaymentProvider = ({children}) => {

    const[openpayment, setOpenPayment] = useState(true)
    const[openpayment_two, setOpenPayment_two] = useState(false)


    const value = {openpayment, setOpenPayment, openpayment_two, setOpenPayment_two}
    return <MultiPayment.Provider value={value}>{children}</MultiPayment.Provider>
} 