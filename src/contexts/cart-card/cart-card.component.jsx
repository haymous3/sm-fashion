import {  createContext, useState, useContext, useEffect } from "react";
import { CompareContext } from "../compare-contexts/compare-context.component";
import { CartContexts } from "../cart-contexts/cart-contexts";
import { PaymentDetailss } from "../payment-contexts/payment-contexts.component";
import {faNairaSign, faPlus} from "@fortawesome/free-solid-svg-icons"


const MainDashBoardDetail = [
       
       
    {
        id: 1,
        name:'in your cart',
        cartquantity: 0, 
        product: 'Product'
    
      
    },
    {
        id: 2,
        name:'in your compare list',
        comparequantity: 0, 
        product: 'Product' 
    },
    {
        id: 3,
        name:'in your order',
        orderquantity: 0, 
        product: 'Product' 
    },

]


export const Amount = [
    {
        id:1,
        icons:faNairaSign,
        amount: 0,
        walletName: 'Wallet Balance'
    },
   
]


export const UpdateAmountByTransfer = [
    {
        id: 1,
        icons: faPlus,
        walletName: 'Fund Wallet',
        type: 'Bank Transfer'
    }
]

export const MainDashBoardDetails = createContext({
    a: '',
    amount: '',
    updateAmountByTransfer: '',
    b:''
})



export const MainDashBoardDetailsProvider = ({children}) => {
    const {compareQuantity} = useContext(CompareContext)
    const {quantity} = useContext(CartContexts)
    const {amountpaid, paymentDetailss} = useContext(PaymentDetailss)

    console.log(paymentDetailss)

   const [a, setA] = useState(MainDashBoardDetail)
   const [amount] = useState(Amount)
   const [updateAmount] = useState(UpdateAmountByTransfer)
   const [b, setB] = useState(Amount)

useEffect(() => {
    const c = MainDashBoardDetail.map((hey) => {
        if (hey.hasOwnProperty('cartquantity') === true){
            hey.cartquantity = quantity
        }else if(hey.hasOwnProperty('comparequantity') === true){
            hey.comparequantity = compareQuantity
        }
      return  {...hey}
    }
    
    ) 

    setA(c) 
}, [quantity,compareQuantity])

    useEffect(() => {
        const d = Amount.map((hey) => {
            if(hey.hasOwnProperty('amount') === true){
                hey.amount = amountpaid
            }

            return {...hey}
        })

    setB(d)
       
        
    }, [amountpaid])
 
  

    // const [maindash] = useState(MainDashBoardDetail)

   

   
   

    
        const value = {a, amount, updateAmount,b}
    return<MainDashBoardDetails.Provider value={value}>{children}</MainDashBoardDetails.Provider>
}

