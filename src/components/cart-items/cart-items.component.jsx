import { useContext } from "react"
import { ImageContexts } from "../../contexts/image-contexts/image-contexts"
import './cart-items.styles.scss'

const CartItem = ({cartitem}) => {
        const {name, price, image, quantity} = cartitem

        const imagevalue = useContext(ImageContexts)
    return(
        <div className="cart-item-container">
            <div className="cart-item-image">
            <img src={`${imagevalue[image]}`} alt={image}></img>
            </div>
            <div>
                <h4>{name}</h4>
                <span>{quantity} X{price}</span> 
            </div>
           
        </div>
    )
}

export default CartItem