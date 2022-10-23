import GeneralTemplate from "../../components/general-template/general-template.component";
import CheckOutDirectory from "../../components/checkoutdirectory/checkoutdirectory.component";

import './checkout.styles.scss'

const CheckOut = () => {
    

    return(
    <GeneralTemplate>
        <div className="checkout-page">
            <CheckOutDirectory/>
        </div>
    
    </GeneralTemplate>
      
      
       
    )
}

export default CheckOut