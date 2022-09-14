import ServiceCard from '../service-card/service-card.component';
import './services.styles.scss'


const Services = ({product, footer, shop}) => {

    return(
    
            <div className={`service-container ${footer} ${shop}`}>
            {
               product.map((cards) => <ServiceCard key={cards.id} services={cards}/>)
               }
            
            </div>
    )

}


export default Services;