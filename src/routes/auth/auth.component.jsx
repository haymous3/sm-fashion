import GENERALDIRECTORY from '../../components/general-directory/general-directory.componet'
import GeneralTemplate from '../../components/general-template/general-template.component';
import SignIn from "../../components/sign-in/sign-in.component";

import SignUp from "../../components/sign-up/sign-up.component";
import './auth.styles.scss'

const AuthPage = () => {


    return(
        <GeneralTemplate>
            <div className="auth-page">
                <GENERALDIRECTORY>
                    <h2>AUTHENTICATION</h2>
                    <div className="auth-forms">
                        <SignIn/>
                        <SignUp/> 
                    </div>
                </GENERALDIRECTORY>
            </div>
        </GeneralTemplate>
       
    )
}

export default AuthPage;