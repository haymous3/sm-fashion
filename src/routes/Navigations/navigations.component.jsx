import { useContext } from "react";
import { Link } from "react-router-dom";
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import BodyBg from "../../components/body-bg/body-bg.component";
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Outlet } from "react-router-dom";
import './navigations.styles.scss'

const Navigations = () => {
    const {isCartOpen, setIsCartOpen, quantity} = useContext(CartContexts)

    const displayCart = () => setIsCartOpen(!isCartOpen)
    return(
        <BodyBg>
            <div className="temp-nav">
        
                <h2>This is the temporary Nav</h2>
                <Link to='/checkout'>CheckOut</Link>
                <FontAwesomeIcon icon={faCartShopping} onClick={displayCart}/>
                <span>{quantity}</span>
                {
                    isCartOpen && <CartDropDown/>
                }
            
            </div>
            <Outlet/>
        </BodyBg >
    
    )
}

export default Navigations

 