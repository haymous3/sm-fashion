// import Images, { IMAGE_TYPES } from "../images/images.componnet";
import { useContext } from 'react'
import { ImageContexts } from '../../contexts/image-contexts/image-contexts'             
import './section-cards.styles.scss'


const SectionCards = ({cards}) => {

    
const {name, brand, image, price} = cards

const hey = useContext(ImageContexts)

    return(
        <div className="sub-product-one">
        <div className="main-banner-img">
            <a href="a">
            
           <img src={`${hey[image]}`} alt="img"/>
            </a>
             <div className="main-banner-content">
                <a href="a">
                <h5>{name}</h5>
                </a>
                <p className="manufacturer_name">{brand}</p>
                <div className="price">
                    <p>{price}</p>
                </div>
            
            </div>
        
        </div>
               
            
                
        </div>
    )
}

export default SectionCards;