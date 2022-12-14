import { useContext } from "react";
import CheckOutItem from '../Checkout_item/checkout_item.component'
import { UserContexts } from "../../contexts/user-contexts/user-contexts.component";
import {useNavigate} from "react-router-dom"
import Button from '../buttons/buttons.component'
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
import GENERALDIRECTORY from "../general-directory/general-directory.componet";
import TableHeadingDirectory from "../table-heading-directory/table-heading-directory.component";
import './checkoutdirectory.styles.scss'

const CheckOutDirectory = () => {
    const {cartItems, totalprice} = useContext(CartContexts)
    const {currentUsers} = useContext(UserContexts)

    const navigation = useNavigate()

    const goToAuth = () => {
        navigation('/auth')
    }

    return(
        <GENERALDIRECTORY>
            <h2>CHECKOUT</h2>
           <TableHeadingDirectory tablestyle='horizontal'/>
            {
                cartItems.map((item) => <CheckOutItem key={item.id} checkitem={item}></CheckOutItem>) 
            }
            <div className='check-out-total'>
                <h2>CART TOTAL</h2>
                <div>
                    <p>Total : {totalprice}</p>
                    <p></p>
                </div>

                {
                    currentUsers ? <Button buttonTypes='checkout'>PROCEED TO PAYMENT</Button> : <Button func={goToAuth} buttonTypes='checkout'>CLICK HERE TO REGISTER</Button>
                }
                

                
            </div>
        </GENERALDIRECTORY>
       
        
    
    )
}

export default CheckOutDirectory;