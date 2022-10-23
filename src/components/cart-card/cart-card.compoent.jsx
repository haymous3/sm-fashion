// import { useContext } from "react";
// import { CartContexts } from "../../contexts/cart-contexts/cart-contexts";
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './cart-card.styles.scss'

const CartCard = ({maindash, generalWalletProps, func}) => {
   
    const {cartquantity, name, comparequantity, orderquantity, product} = maindash
    const {icons, amount, walletName, type} = generalWalletProps
    console.log(generalWalletProps)

    
  
 
    
    return(
        <div className="cart-card" onClick={func}>
            <FontAwesomeIcon icon={icons}/>
            <h3> {orderquantity || comparequantity || cartquantity} {product} </h3>
            <h4> {amount}</h4>
            <h4> {type}</h4>
            <h5> {walletName}</h5>
            
            
            <h4> {name}</h4>
          
        </div>
    )
}

export default CartCard;