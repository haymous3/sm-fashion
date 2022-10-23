import { useContext } from "react";
import GeneralTemplate from "../../components/general-template/general-template.component";
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import FooterHero from "../../components/footer-hero/footer-hero.component";
import ShopDirectory from "../../components/shop-directory/shop-directory.component";

import './shop.styles.scss'

const Shop = () => {

    const {shopherodetails} = useContext(HeroContexts)
   

    return(

        <GeneralTemplate>
            <div className="shop-inner-content">
                
                <FooterHero footer={shopherodetails}/>
                <ShopDirectory/>

            </div>
        </GeneralTemplate>
    )
}


export default Shop