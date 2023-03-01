import { useContext, useEffect, useState } from "react"

import { TotalPriceContexts } from "../../contexts/total-price/total-price-context"
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './cart-card.styles.scss'

const CartCard = ({maindash, generalWalletProps, func}) => {
   
    
    const {totalPriceItem} = useContext(TotalPriceContexts)
    const {cartquantity, name, comparequantity, orderquantity, product} = maindash
    const {icons, amount, walletName, type} = generalWalletProps
    console.log(generalWalletProps)

    const [balance, setBalance] =  useState(0)


    useEffect(() => {

        const remainder = () => amount - totalPriceItem;

        setBalance(remainder())
    }, 
    
    [amount, totalPriceItem])

    
  
 
    
    return(
        <div className="cart-card" onClick={func}>
            <FontAwesomeIcon icon={icons}/>
            <h3> {orderquantity || comparequantity || cartquantity} {product} </h3>
            {  balance ? <h4> {balance}</h4>: null}
            <h4> {type}</h4>
            <h5> {walletName}</h5>
            
            
            <h4> {name}</h4>
          
        </div>
    )
}

export default CartCard;