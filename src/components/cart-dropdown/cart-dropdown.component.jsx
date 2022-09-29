import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContexts } from '../../contexts/user-contexts/user-contexts.component'; 
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts';
import CartItem from '../cart-items/cart-items.component';
import Button from '../buttons/buttons.component';
import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContexts);
    const {currentUsers} = useContext(UserContexts)


    const navigate =  useNavigate()

    const goToNavigate = () => {
        navigate('/checkout')
    }

    // console.log(cartItems)

    return(
        
        <div className="cart-dropdown"> 
              
        { currentUsers ?
              cartItems.map((item) => <CartItem key={item.id} cartitem={item}></CartItem>) : null
        }
           
           <Button buttonTypes='checkout' func={goToNavigate}>Go TO CHECKOUT</Button>
            
            
           
        </div>
    )
}


export default CartDropDown;