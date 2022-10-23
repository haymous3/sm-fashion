import { createContext, useState, useContext, useEffect } from "react";
import { UserContexts } from "../user-contexts/user-contexts.component";
import { getPayementDetails } from "../../utlities/firebase/firebase";


export const PaymentDetailss = createContext({
    paymentDetailss: [],
    setPaymentDetailss: () => {},
    amountpaid: 0,
    setAmountPaid: () => {}
})



export const PaymentDetailsContexts = ({children}) => {

    const {currentUsers} = useContext(UserContexts)
    const [paymentDetailss, setPaymentDetailss] = useState([])
    const [amountpaid, setAmountPaid] = useState(0)

   
    
    useEffect(() => {
        let me = [];

        for (let hey in paymentDetailss){
            
            me = paymentDetailss[hey]
        }
        console.log(me)
       
        const totalAmount = me.reduce((start, finish) => {
         let result;
         if(finish.status === true){
            result = start + parseInt(finish.amountToPay)
         }else{
            result = start
         }
         console.log(result)
         return result
        
        }, 0)

        setAmountPaid(totalAmount)

    }, [paymentDetailss])


    useEffect(() => {
        const getPayemt = async() => {
          const thepaymentDetails =  await getPayementDetails(currentUsers.uid)
          setPaymentDetailss(thepaymentDetails)

          
        }

        getPayemt()
    },
    
    [currentUsers])


//    const totalMe = me.reduce((start, finish) => start + parseInt(finish.amountToPay), 0)
//    console.log(totalMe)
    console.log(currentUsers)
    console.log(amountpaid)

    const value = {paymentDetailss,amountpaid, setAmountPaid}


    return <PaymentDetailss.Provider value={value}>{children}</PaymentDetailss.Provider>
}
