import {useContext} from 'react'
import { ImageContexts } from '../../contexts/image-contexts/image-contexts'
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
// import { ProductContexts } from '../../contexts/product-contexts/product-contexts'
import Button from '../buttons/buttons.component'
import './service-card.styles.scss'

export const Card_STYLE = {
    footercard: 'footercard',
    servicecard: 'servicecard'
} 




const ServiceCard = ({services}) => {
    // console.log(services)
    const {name, image, text} = services

    const hey = useContext(ImageContexts)
    const { addToMyCart } = useContext(CartContexts)

    const clickToAdd = () => addToMyCart(services)
  

  

    

    

    // const {allProduct} = useContext(ProductContexts)

    


    

    return(
        <div className='service-card footer-card'>
            <div className='service-card-img'>
                <img src={`${hey[image]}`} alt="img"/>
            </div>
            
            <div className='service-text'>
                <h3>{name}</h3>
                <p>{text}</p>
                <Button func={clickToAdd}>Add to Cart</Button>
            </div>
            

        
        </div>
    )
}


export default ServiceCard