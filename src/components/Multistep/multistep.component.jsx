import { useState, useEffect } from "react"
import CheckoutMultistep from "../checkout-multistep/checkout-multistep.component"
import MultistepInput from "../Multistep-input-form/Multistep-input-form.component"
import MultistepPayment from "../MultistepPayment/MultistepPayment.component"

import './multistep.styles.scss'

const Multistep = ({step, indx, changeAnswer, answersPages}) => {
    
 // useEffect(() => {
    //     if(Object.keys(answers).length > 1 ){
    //         pagesAnswers(answers, answers.index)
    //         setAnswers({index: indx})
    //     }else{
    //         setAnswers({index: indx})
    //     }
    
    //    }, [indx, pagesAnswers, answers])

    // console.log(answers)

    return(
     
        <div className="e">
        {
            step[indx - 1].hasOwnProperty('details') ?   step[indx - 1].details.map((item) => 
          
           <CheckoutMultistep key={item.id} items={item} index={indx}/>
          
            
             ) :step[indx-1].hasOwnProperty('detail_payment') ? step[indx-1].detail_payment.map((payment) => <MultistepPayment key={payment[0]} payment={payment}/>)
            : step[indx - 1].detail.map((hey) => 
            
            <MultistepInput key={hey.label} forms={hey} onchange={changeAnswer} answers={answersPages[indx] ? answersPages[indx][hey.value] : null}/>)
           
                 
        }
       

        </div> 
       
       


    )
}

export default Multistep