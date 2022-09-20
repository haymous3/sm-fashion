import { useContext } from "react";
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import { ProductContexts } from "../../contexts/product-contexts/product-contexts";
import CHECKOUTDIRECTORY from "../../components/checkout-directory/checkout-directory.componet";
import Services from "../../components/services/services.component";
import FooterHero from "../../components/footer-hero/footer-hero.component";
import './checkout.styles.scss'

const CheckOut = () => {
    const {footerdetails} = useContext(HeroContexts)
    const {serviceDetails,footerDetails } = useContext(ProductContexts)

    return(
    
       <div className="checkout-page">
            <CHECKOUTDIRECTORY/>
            <Services product={serviceDetails}></Services>
            <FooterHero footer={footerdetails}/>
            <Services product={footerDetails} footer='footer'></Services>
       </div>
      
       
    )
}

export default CheckOut