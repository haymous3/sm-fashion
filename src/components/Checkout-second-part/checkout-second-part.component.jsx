import { useContext } from 'react'
import Button from '../buttons/buttons.component'
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
import CartItem from '../cart-items/cart-items.component'
import './checkout-second-part.styles.scss'


const CheckoutSecondPart =({index, setIndex}) => {

    const {cartItems, totalprice} = useContext(CartContexts)
 
    const nextbtn = () => {
        if(index < 4){
            setIndex(previousBtn => previousBtn + 1)
        }
      
    }
    return(
        <div className="checkout-checkout-second-part">

        {
            index === 1 ? 
            <div className='check-out-total'>
                <h2>CART TOTAL</h2>
                <div className='price-total'>
                    <p>Total : {totalprice}</p>
                    <p></p>
                </div>
                <div className='additional-comment'>
                    <span>Additional Comment</span>
                    <textarea></textarea>
                </div>
                {
                    (index === 1) ? <Button func={nextbtn} buttonTypes='checkout'>PROCEED TO DETAILS</Button>: null
                }
              
    
            </div> :  
             
             index === 4 ? 
             <div className='check-out-total'>
             <p>Order Summary</p>
             <div className='review-total'>
                 <p>Subtotal</p>
                 <p>{totalprice}</p>
             </div>
             <div className='review-total'>
                 <p>Taxes</p>
                 <p>0</p>
             </div>
             <div className='review-total'>
             <p>Shipping</p>
             <p>0</p>
             </div>
             <div className='review-tota'>
             <p>Total : {totalprice}</p>
             <p></p>
            </div>

            
             {
                 (index === 1) ? <Button func={nextbtn} buttonTypes='checkout'>PROCEED TO DETAILS</Button>: null
             }
           
 
         </div>




             :

             <div className='order-summary'>

             <p>Order Summary</p>
             {cartItems.map((item) => <CartItem key={item.id} cartitem={item}></CartItem>) }
             <div className='price-total'>
                 <p>Total : {totalprice}</p>
                 <p></p>
             </div>
          </div>
            
          
        }
       
        </div>
    )

}


export default CheckoutSecondPart