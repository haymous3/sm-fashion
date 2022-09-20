import { useContext } from "react";
import { ProductContexts } from "../../contexts/product-contexts/product-contexts";
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import FooterHero from "../../components/footer-hero/footer-hero.component";
import ShopDirectory from "../../components/shop-directory/shop-directory.component";
import Services from "../../components/services/services.component";
import './shop.styles.scss'

const Shop = () => {

    const {shopherodetails,footerdetails} = useContext(HeroContexts)
    const {serviceDetails,footerDetails } = useContext(ProductContexts)

    return(

  
            <div className="shop-inner-content">
      
                <FooterHero footer={shopherodetails}/>
                <ShopDirectory/>
                <Services product={serviceDetails}></Services>
                <FooterHero footer={footerdetails}/>
                <Services product={footerDetails} footer='footer'></Services>
             
            </div>
            
    
    )
}


export default Shop