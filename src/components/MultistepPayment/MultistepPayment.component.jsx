import { useContext } from "react"
import { MultiPayment } from "../../contexts/MultiPayment/Multipayment.contexts"
import { ImageContexts } from "../../contexts/image-contexts/image-contexts"
import MultistepInput from "../Multistep-input-form/Multistep-input-form.component" 
import PayWithWallet from "../pay-with-wallet/pay-with-wallet.component"
import "./MultistepPayment.styles.scss"

const MultistepPayment = ({payment}) => {

    const {openpayment, setOpenPayment, openpayment_two, setOpenPayment_two} = useContext(MultiPayment)
    const {cardone} = useContext(ImageContexts);

    


    const closepayment = () => setOpenPayment(!openpayment)
    const closepayment_two = () => setOpenPayment_two(!openpayment_two)

   
    return(

        <div className="multipay">
            <div className="pay-with-card">
                <div className="pay-with-card-head">
                    <div>
                        <span>Pay With Card</span>
                    </div>
                    <div>
                        <button onClick={closepayment}>X</button>
                    </div>
                </div>
                <div className="pay-with-card-body">
                   
                <div className="pay-card-body">
               

                {
                    openpayment ?  <img src={`${cardone}`} alt="a"/> : null
                }
                {
                    openpayment ? 
                    payment.map((hey) => <MultistepInput keys={hey.label} forms={hey}/>) : ''
                }
                </div>
                      
                </div>
            </div>
            <div className="pay-with-wallet">
                <div className="pay-with-wallet-head">
                    <div>
                        <span>Pay With Wallet</span>
                    </div>
                    <div>
                    <button onClick={closepayment_two}>X</button>
                    </div>
                </div>
                <span className="pay-with-wallet-body">
                        
                        
                        {
                            openpayment_two ? <PayWithWallet />: null
                        }
                        
                
                </span>
            </div>
        
        </div>
    )
}


export default MultistepPayment