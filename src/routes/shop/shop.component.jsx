import { useContext } from "react";
import { ProductContexts } from "../../contexts/product-contexts/product-contexts";
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import BodyBg from "../../components/body-bg/body-bg.component"
import TemporaryNav from "../../components/temporary-nav/temporary-nav.component";
import FooterHero from "../../components/footer-hero/footer-hero.component";
import ShopDirectory from "../../components/shop-directory/shop-directory.component";
import Services from "../../components/services/services.component";
import './shop.styles.scss'

const Shop = () => {

    const {shopherodetails,footerdetails} = useContext(HeroContexts)
    const {serviceDetails,footerDetails } = useContext(ProductContexts)

    return(

        <BodyBg>
            <div className="shop-inner-content">
                <TemporaryNav/>
                <FooterHero footer={shopherodetails}/>
                <ShopDirectory/>
                <Services product={serviceDetails}/>
                <FooterHero footer={footerdetails}/>
                 <Services product={footerDetails} footer='footer'/>
            </div>
            
        </BodyBg>
    )
}


export default Shop