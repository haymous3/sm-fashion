import { useContext } from "react";
import GeneralTemplate from "../general-template/general-template.component";
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import FooterHero from "../footer-hero/footer-hero.component";
// import { MultiStepContext } from "../../contexts/multistep-contexts/multistep-contexts.component";
// import ShopDirectory from "../shop-directory/shop-directory.component";

import './shop.styles.scss'

const Shop = ({children}) => {

    const {shopherodetails} = useContext(HeroContexts)
//     const {detailss} = useContext(MultiStepContext)
   
// console.log(detailss)
    return(

        <GeneralTemplate>
            <div className="shop-inner-content">
                
                <FooterHero footer={shopherodetails}/>
                {children}

            </div>
        </GeneralTemplate>
    )
}


export default Shop