import { useContext } from "react";
import { HeroContexts } from "../../contexts/heros-contexts/heros-contexts";
import GENERALDIRECTORY from '../../components/general-directory/general-directory.componet'
import { ProductContexts } from "../../contexts/product-contexts/product-contexts";
import SignIn from "../../components/sign-in/sign-in.component";
import Services from "../../components/services/services.component";
import FooterHero from "../../components/footer-hero/footer-hero.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './auth.styles.scss'

const AuthPage = () => {

    const {footerdetails} = useContext(HeroContexts)
    const {serviceDetails,footerDetails } = useContext(ProductContexts)

    return(
        <div className="auth-page">
            <GENERALDIRECTORY>
                <h2>AUTHENTICATION</h2>
                <div className="auth-forms">
                    <SignIn/>
                    <SignUp/>
                    
                </div>
            
            </GENERALDIRECTORY>
        
            
            <Services product={serviceDetails}></Services>
            <FooterHero footer={footerdetails}/>
            <Services product={footerDetails} footer='footer'></Services>
        </div>
    )
}

export default AuthPage;