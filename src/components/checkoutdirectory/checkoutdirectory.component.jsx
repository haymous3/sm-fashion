import { useContext, useState } from "react";
// import CheckOutItem from '../Checkout_item/checkout_item.component'
// import { UserContexts } from "../../contexts/user-contexts/user-contexts.component";
import {useNavigate} from "react-router-dom"
import Button from '../buttons/buttons.component'

import { MultiSteps } from "../../contexts/multistep-contexts/multistep-contexts";
import GENERALDIRECTORY from "../general-directory/general-directory.componet";
import CheckoutSecondPart from "../Checkout-second-part/checkout-second-part.component"
// import TableHeadingDirectory from "../table-heading-directory/table-heading-directory.component";
import Multistep from "../Multistep/multistep.component";

import CheckoutprogressBar from "../ProgressBar/ProgressBar.component";
import { PaymentVerification } from "../../contexts/paymentverification/paymentverification.contexts";
import './checkoutdirectory.styles.scss'

const CheckOutDirectory = () => {
    const {a} = useContext(MultiSteps)
    const {paywithwallet} = useContext(PaymentVerification)
    // const {currentUsers} = useContext(UserContexts)
    const [index, setIndex] = useState(1) 
    const [answers, setAnswers] = useState({})


   

    const changeAnswer = (categoties, value) => {
        setAnswers({...answers, [categoties]: value})
    }


    const [pagesAnswers, setPagesAnswers] =  useState({})

    const storePageAnswer = (answer,index) => {
        setPagesAnswers({...pagesAnswers, [index]: answer})

    }  

    console.log(answers)


    const nextbtn = () => {
        if(index < 4){
            setIndex(previousBtn => previousBtn + 1)
        }
      
    } 

    const previousbtn = () => {
        if(index > 1){
            setIndex(previousBtn => previousBtn - 1)
        }
    }
    

    const navigation = useNavigate()

    const goToAuth = () => {
        navigation('/auth')
    }

    return(
        <GENERALDIRECTORY>
        <div className="bar-heading">
        {
            (index === 1) ? <h3>Cart</h3>:
             (index === 2) ? <h3>Details</h3>: 
             (index === 3) ? <h3>Payment</h3>:
             (index === 4) ? <h3>Review</h3>: null
             
        }
            <CheckoutprogressBar className='bar-progress' step={index}/>
        </div>
           
        <div className="divide">
            <div style={{
                width:'100%'
            }}>
                    <Multistep step={a} indx= {index} pagesAnswers={storePageAnswer} answersPages={pagesAnswers} changeAnswer={changeAnswer}/>
                    {
                        index === 4 ? 
                        <div className="complete-review">
                            <div className="shipping-address">
                            <h3>Shipping to:</h3>
                                <p>Client:{answers.firstname} {answers.lastname}</p> 
                                <p>Address:{answers.address}</p>
                                <p>Phone: {answers.phone}</p>
                            </div>
                            <div className="payment-method">
                            <p>Payment Method : {
                                (index === 4 && paywithwallet) ? 'Wallet' : 'Card'
                            }</p>
                            </div>

                        
                        </div>
                        :null
                    }
            </div>
            <div>
                <CheckoutSecondPart index={index} setIndex={setIndex}/>
            </div>
           
        </div>
        
            <div className="check-out-buttons">
            {
                (index === 1) ? null :
                 (index === 2) ? <Button func={previousbtn} buttonTypes='checkout'>BACK TO CART</Button> :
                 (index === 3) ? <Button func={previousbtn} buttonTypes='checkout'>BACK TO DETAILS</Button> :
                 (index === 4) ? <Button func={previousbtn} buttonTypes='checkout'>BACK TO PAYMENT</Button> : null
            }
            {
              
                (index === 2) ? <Button func={nextbtn} buttonTypes='checkout'>PROCEED TO PAYMENT</Button> :
                (index === 3 && paywithwallet) ? <Button func={nextbtn} buttonTypes='checkout'>PROCEED TO REVIEW</Button> :
                (index === 4) ? <Button func={nextbtn} buttonTypes='checkout'>COMPLETE ORDER</Button> : null
            }
            
            
            </div>
        </GENERALDIRECTORY>
       
        
    
    )
}

export default CheckOutDirectory;