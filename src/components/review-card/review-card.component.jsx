import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar,  faCircleInfo, faCodeCompare} from '@fortawesome/free-solid-svg-icons'
import { ImageContexts } from '../../contexts/image-contexts/image-contexts'
import { CartContexts } from "../../contexts/cart-contexts/cart-contexts"
import './review-card.styles.scss'

const ReviewCard = ({reviews}) => {

    console.log(reviews)
    const {image, price, style, composition, art_no} = reviews
    

    const hey = useContext(ImageContexts)
    const {addToMyCart} = useContext(CartContexts)

    const add = () => addToMyCart(reviews)
    // const increase =() => increaseProducts(reviews)
    // const decrease =() => decreaseProducts(reviews)


    return(
        <div className="review-content">
            <div className="review-img">
                <img src={`${hey[image]}`} alt="img"/>
            </div>
        
            <div className="reviews">
                <div className="review-icon">
                    <div className="product-product">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <div className="product-compare">
                  
                       <div className="product-com">
                       <h6>compare</h6>
                       <FontAwesomeIcon icon={faCodeCompare} className="compare"/>
                      
                       
                      
                       </div>
                        
                       
                       
                        
                         
                        
                        
                       
                    </div>
              
                </div>
                <p> ${price}</p>
                <div className="btn-quan">
                
                <button onClick={add}>Add to cart</button>
                </div>
                <div className="product-info-directory">
                    <div className="product-info">
                        <FontAwesomeIcon icon={faCircleInfo}/>
                        <h3>Product Info</h3>
                    </div>
                    <div className="product-info-content">
                        <div>
                            <h2>Style</h2>
                            <ul>
                                <li>{style}</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Composition</h2>
                            <ul>
                            {
                                composition.map((hey) => <li>{hey}</li>)
                            }
                            </ul>
                        </div>
                        <div>
                            <h2>Art No</h2>
                            <ul>
                                <li>{art_no}</li>
                            </ul>
                        </div>
                      
                    </div>
                </div>
                
            </div>

        
        </div>
    )
}

export default ReviewCard