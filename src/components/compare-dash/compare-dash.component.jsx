import { useContext } from "react"
import { ImageContexts } from "../../contexts/image-contexts/image-contexts"
import { CartContexts } from "../../contexts/cart-contexts/cart-contexts"
import './compare-dash.styles.scss'

const CompareDash = ({compare}) => {
        const {name, price, brand, image} = compare 
        const hey = useContext(ImageContexts)
        const {addToMyCart} = useContext(CartContexts)

        const addToCart = () => addToMyCart(compare)
    return(
        <div className="compare-items">
            <img src={`${hey[image]}`} alt={`${hey[image]}`}/>
            <p>{name}</p>
            <p>{brand}</p>
            <p>{price}</p>
            <div className="compare-btn">
             <button onClick={addToCart}>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default CompareDash