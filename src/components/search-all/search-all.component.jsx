import ServiceCard from "../service-card/service-card.component"

const SearchAll = ({product, footer, shop, catergories}) => {

    return(
        <div className={`${footer} ${shop}`}>
        <div className="service-container">

        <div className='categories-header'>
                <h3  className='catergory-title' key={catergories}>{catergories}</h3>
               
            
            </div>


      {  product.map((hey) => <ServiceCard key={hey.id} services={hey}/>)}
        
        </div>
    </div>
    )
}

export default SearchAll