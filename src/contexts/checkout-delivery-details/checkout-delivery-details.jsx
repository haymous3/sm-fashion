import { createContext, useState } from "react";

const ChechoutDelivery = createContext({
    firstName:'',
    lastName:'',
    address:'',
    phone:'',
    payment_method:''
})



export const ChechoutDeliveryProvider = ({children}) => {

    const [deliveryDetails, setDeliveryDetails] = useState(ChechoutDelivery)

    const [firstName, lastName, address, phone] = deliveryDetails


    const value= {firstName, lastName, address, phone}




    return <ChechoutDelivery.Provider value={value}>{children}</ChechoutDelivery.Provider>
}