import { useContext } from 'react'
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
import CheckOutItem from '../Checkout_item/checkout_item.component'
import Button from '../buttons/buttons.component'
import './checkout-directory.styles.scss'

const CHECKOUTDIRECTORY = () => {
    const {cartItems, totalprice} = useContext(CartContexts)
    return(
        <div className='checkout-directory'>
            <h2>CHECKOUT</h2>
            <div className='checkout-list'>
                <span>
                    IMAGE
                </span>
                <span>
                    PRODUCT
                </span>
                <span>
                    PRICE
                </span>
                <span>
                    QUANTITY
                </span>
                <span>
                    REMOVE
                </span>
            </div>
            {
                cartItems.map((item) => <CheckOutItem key={item.id} checkitem={item}></CheckOutItem>)
            }
            <div className='check-out-total'>
                <h2>CART TOTAL</h2>
                <div>
                    <p>Total : {totalprice}</p>
                    <p></p>
                </div>
                <Button buttonTypes='checkout'>PROCEED TO PAYMENT</Button>

                
            </div>
        
        </div>
    )
}

export default CHECKOUTDIRECTORY