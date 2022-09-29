import {useContext} from 'react';
import Navigations from '../../components/nav/nav.component';
import { ProductContexts } from '../../contexts/product-contexts/product-contexts';
import { ImageContexts } from '../../contexts/image-contexts/image-contexts';
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import Hero from "../../components/hero/hero.component";
import SubProduct from "../../components/second-sections/second-sections.component";
import NewsLetter from "../../components/news-letters/news-letter.component";
import Services from "../../components/services/services.component";
import FooterHero from '../../components/footer-hero/footer-hero.component';




const HomePage = () => {

    const {firstProduct, secondProduct, thirdProduct, fourthProduct, serviceDetails,footerDetails } = useContext(ProductContexts)
    const {sectionbanner, women, jean, bata} = useContext(ImageContexts)
    const {footerdetails} = useContext(HeroContexts)

    

    // console.log(sectionbanner)




    return(
        <div>
            <Navigations navlinks={[]} general='homenav'/>
            <Hero/>
            <SubProduct product={firstProduct} images={sectionbanner}/>
            <SubProduct product={secondProduct} rowreverse='reverse' images={women}/>
            <SubProduct product={thirdProduct} images={jean}/>
            <SubProduct product={fourthProduct} rowreverse='reverse' images={bata}/>
            <NewsLetter/>
            <Services product={serviceDetails}/>
           <FooterHero footer={footerdetails}/>
            <Services product={footerDetails} footer='footer'/>
          
            
        
        </div>
    )
}

export default HomePage;