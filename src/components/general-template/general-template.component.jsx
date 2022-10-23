import {Fragment, useContext } from 'react';
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import { ProductContexts } from "../../contexts/product-contexts/product-contexts";
import Services from "../../components/services/services.component";
import FooterHero from "../../components/footer-hero/footer-hero.component";
import './general-template.styles.scss'

const GeneralTemplate = ({children}) => {
    const {footerdetails} = useContext(HeroContexts)
    const {serviceDetails,footerDetails } = useContext(ProductContexts)

    return(
        <Fragment>
            {children}
            <div className='general-template'>
                <Services product={serviceDetails}></Services>
                <FooterHero footer={footerdetails}/>
                <Services product={footerDetails} footer='footer'></Services>
            </div>
       
        </Fragment>
    )
}


export default GeneralTemplate;