import { useContext } from "react"

import { ImageContexts } from "../../contexts/image-contexts/image-contexts"
import { CartContexts } from "../../contexts/cart-contexts/cart-contexts"
import './checkout_item.styles.scss'

const CheckOutItem = ({checkitem, index}) => {

    const {name, image, price, quantity, brand} = checkitem

    const images = useContext(ImageContexts)
    const {increaseProducts, decreaseProducts, clearProducts} = useContext(CartContexts)

    const increase = () => increaseProducts(checkitem)
    const decrease = () => decreaseProducts(checkitem)
    const clear = () => clearProducts(checkitem)

    return(
        <div className="checkout-checkout">
            <div className="checkout-checkout-first-part">
                <div className="checkout-checkout-section-one">
                        <div className="checkout-checkout-image">
                            <img src={`${images[image]}`} alt="images"/>
                        </div>
                        <div className="checkout-checkout-names">
                            <div>
                                <span className="font-weight">{name}</span>
                            </div>
                            <div>
                            <span>{brand}</span>
                        </div>
                            <div>
                                <span>{price}</span>
                            </div>
                        </div>
                </div>
                <div className="checkout-checkout-section-two">

                    <div>
                        <span className="font-weight">Quantity</span>

                        {
                            index === 1 ? 
                            <div className="arrow">
                            <span>
                                 <h2 onClick={decrease}>&#10094;</h2>
                            </span>
                        
                            {quantity}
                            <span>
                                <h2 onClick={increase}> &#10095;</h2>
                            </span>
                        </div>:  <p>{quantity}</p>

                            
                        }
                        
                       
                       
                    </div>

                    {
                        index === 1 ? 
                        <div className="clear-btn">
                        <button onClick={clear}>&#10005;</button>
                    </div>: null
                    }

                   
                
                </div>


                
                 
                
            
                
            </div>

            
            
          
            
       
        </div>
    )
}

export default CheckOutItem