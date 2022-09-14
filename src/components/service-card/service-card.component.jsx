import {useContext} from 'react'
import { ImageContexts } from '../../contexts/image-contexts/image-contexts'
import './service-card.styles.scss'

export const Card_STYLE = {
    footercard: 'footercard',
    servicecard: 'servicecard'
} 




const ServiceCard = ({services}) => {

    const {name, image, text} = services

    const hey = useContext(ImageContexts)

    return(
        <div className='service-card footer-card'>
            <div className='service-card-img'>
                <img src={`${hey[image]}`} alt="img"/>
            </div>
            
            <div className='service-text'>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>

        
        </div>
    )
}


export default ServiceCard