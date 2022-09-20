import { useContext } from "react"
import { ImageContexts } from "../../contexts/image-contexts/image-contexts"
import { CartContexts } from "../../contexts/cart-contexts/cart-contexts"
import './checkout_item.styles.scss'

const CheckOutItem = ({checkitem}) => {

    const {name, image, price, quantity} = checkitem

    const images = useContext(ImageContexts)
    const {increaseProducts, decreaseProducts, clearProducts} = useContext(CartContexts)

    const increase = () => increaseProducts(checkitem)
    const decrease = () => decreaseProducts(checkitem)
    const clear = () => clearProducts(checkitem)

    return(
        <div className="checkout-checkout">
        <div>
         <img src={`${images[image]}`} alt="images"/>
        </div>
        <div>
            <span>{name}</span>
        </div>
        <div>
            <span>{price}</span>
        </div>
        <div className="arrow">
            <span>
                 <h2 onClick={decrease}>&#10094;</h2>
            </span>
             {quantity}
             <span>
                 <h2 onClick={increase}> &#10095;</h2>
             </span>
        </div>
        <div>
        <span onClick={clear}>&#10005;</span>
        </div>
       
       
        
       
       

        
        </div>
    )
}

export default CheckOutItem