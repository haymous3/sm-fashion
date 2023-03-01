
import CheckOutItem from "../Checkout_item/checkout_item.component"

import './checkout-multistep.styles.scss'

const CheckoutMultistep = ({items, index}) => {

    return(
            

            <CheckOutItem key={items.id} checkitem={items} index={index}></CheckOutItem>

         
            
            
    
           
          
        
       
    )
}

export default CheckoutMultistep