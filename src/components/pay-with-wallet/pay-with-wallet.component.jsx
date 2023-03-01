import { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { createBoughtItems } from '../../utlities/firebase/firebase'
import { UserContexts } from '../../contexts/user-contexts/user-contexts.component'
import { Amount } from '../../contexts/cart-card/cart-card.component'
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
import { TotalPriceContexts } from '../../contexts/total-price/total-price-context'
import { PaymentVerification } from '../../contexts/paymentverification/paymentverification.contexts'

import './pay-with-wallet.styles.scss'





const PayWithWallet = () => {
    const {currentUsers} = useContext(UserContexts)
    let {totalprice, cartItems} = useContext(CartContexts)
    const {setPaywithWallet} = useContext(PaymentVerification)
    const {itemandtotalPrice, totalPriceItem} = useContext(TotalPriceContexts)
   
    console.log(itemandtotalPrice)
    console.log(totalPriceItem)

    const answer = cartItems.map((hey) => {
        let obj = {}

        obj.name = hey.name
        obj.brand = hey.brand
        obj.price = hey.price
        


        return obj
    })

    
    
    const setitemsfunc = async() => {
        

        try {
            await createBoughtItems(currentUsers.uid, {answer, totalprice})
        } catch (error) {
            console.log(error)
        }

       
    }

   
    

  
    const amounts =  Amount.map((hey) => hey.amount)
    const [amount, setAmount] = useState(0)
    const [amountremaining, setAmountremaining] = useState(0)
   
 
    

    const verify = () => setPaywithWallet(true)
    
    useEffect(() => {

        const remainder = () => amounts[0] - totalPriceItem;
        setAmount(remainder())


    }, [amounts, totalPriceItem])

 
    useEffect(() => {

        const remainder = () => amount - totalprice;
        setAmountremaining(remainder())


    }, [amount, totalprice])


    console.log(amount)

    const gotoWallet = useNavigate()

    const walletPage = () => {

        gotoWallet('/dashboard/wallet')
    }

    const paymentMethod = async() => {
       
        setitemsfunc()
      

        verify();
        if(amount < 0){
            alert('You account is to low')
            walletPage()
        } else if (amount > 0){
            alert('You can now proceed to Review your cart')
        }

    }
     
    
    

    return(
        <div className='payment-with-wallet'>
            <div className='amount-balance'>
                <p>Total Amount Balance</p>
                
                    <p>{amount}</p>
                
            </div>
            <div className='amount-price'>
                <p>Total Price</p>
                <p>{totalprice}</p>
            </div>
            <div className='remaining-balance'>
                <p>Total Remainng Balance</p>
                <p>{amountremaining}</p>
            </div>

            <div className='pay-btn'>
                <button onClick={paymentMethod}>Continue with Payment</button>
            </div>
            


        
        </div>
    )
}


export default PayWithWallet