// import { useContext, Fragment } from 'react';
// import QuickReview from '../quick-preview-directory/quick-preview-directory.component'
// import { OpenReview } from '../../contexts/open-review/open-review.component'
import ServiceCard from '../service-card/service-card.component';
import { Link } from 'react-router-dom';
// import SearchBox from '../searchBox/searchBox.component';
import './services.styles.scss'


const Services = ({product, footer, catergories, shop}) => {
// console.log(product)
// const {openReview} = useContext(OpenReview)



    return(
   
        <div className={`${footer} ${shop}`}>
            
        <div className='categories-header'>
            <h3 className='catergory-title' key={catergories}>{catergories}</h3>
            <Link to={`${catergories}`}>
            <button>View More</button>
            </Link>
            
        
        </div>
      
        <div className='service-container'>
        {
            product.filter((_, index) => index < 4).map((cards) => <ServiceCard key={cards.id} services={cards}/>)
            }
        </div>
        
        
        </div>
        
     
           
    )

}


export default Services;