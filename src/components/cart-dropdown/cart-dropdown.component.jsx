import { useContext } from 'react';
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts';
import CartItem from '../cart-items/cart-items.component';
import Button from '../buttons/buttons.component';
import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContexts)

    console.log(cartItems)

    return(
        <div className="cart-dropdown">                                                                                                                                                                                                                    
            {
                cartItems.map((item) => <CartItem key={item.id} cartitem={item}></CartItem>)
           }
           <Button buttonTypes='checkout'>Go TO CHECKOUT</Button>
            
            
           
        </div>
    )
}


export default CartDropDown;