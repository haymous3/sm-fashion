import {useContext, Fragment} from 'react'
import { useNavigate } from 'react-router-dom'


import { OpenReview } from "../../contexts/open-review/open-review.component";
import { ImageContexts } from '../../contexts/image-contexts/image-contexts'
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
import { CompareContext } from '../../contexts/compare-contexts/compare-context.component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import QuickReview from '../quick-preview-directory/quick-preview-directory.component'
// import { OpenReview } from '../../contexts/open-review/open-review.component'
// import { ProductContexts } from '../../contexts/product-contexts/product-contexts'
import Button from '../buttons/buttons.component'
import './service-card.styles.scss'

export const Card_STYLE = {
    footercard: 'footercard',
    servicecard: 'servicecard'
} 

// <FontAwesomeIcon icon={icons} onClick={clicKToCompare}/>


const ServiceCard = ({services}) => {

    const navigate = useNavigate()

    const goToReview = () => {
        navigate('/shop')
    }
    // console.log(services)
    const {name, image, text, icons} = services

    const hey = useContext(ImageContexts)
    const { addToMyCart,newreiew } = useContext(CartContexts)
    const { addCompareList } = useContext(CompareContext)
    const {openReview, setOpenReview} = useContext(OpenReview)

    

    // const {openReview} = useContext(OpenReview)

    const clickToAdd = () => addToMyCart(services)
    const clicKToCompare = () => addCompareList(services)
    const addReview = () => newreiew(services)
      
        
    const review = () => {
        setOpenReview(!openReview)

       addReview()
    
    }
        
        
    

    // const {allProduct} = useContext(ProductContexts)

    


    

    return(

        <Fragment>
        
        <div className='service-card footer-card'>
              
           
            <div className='service-card-img'>
                <img src={`${hey[image]}`} alt="img"/>
            </div>
            
            <div className='service-text'>
                <h3>{name}</h3>
                <p>{text}</p>
                <Button func={clickToAdd}>Add to Cart</Button>
                <Button func={review}>Quick Review</Button>
            </div>
            

        
        </div>
        
        </Fragment>
   
    )
}


export default ServiceCard