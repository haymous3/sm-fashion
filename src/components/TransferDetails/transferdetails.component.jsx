import { useContext, useState } from 'react'
import { UserContexts } from '../../contexts/user-contexts/user-contexts.component'
import { createPaymentProfile } from '../../utlities/firebase/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { WalletDetails } from '../../contexts/wallet-contects/wallet-context.component'
import FormInput from '../form-inputs/form-input.component'
import './transferdetails.styles.scss'


const TransferDetails = () => {

    const PaymentDetails = {
        amountToPay: '',
        transactionId: '',
        status: false
    }
    
    const [paymentDetails, setPaymentDetails] = useState(PaymentDetails)
    const {amountToPay, transactionId} = paymentDetails

    const {setIsTransfer} = useContext(WalletDetails)
    const {currentUsers} = useContext(UserContexts)
  

    
    

    console.log(currentUsers)
    // const {uid} = currentUsers
    
    const closeWalletDetails = () => setIsTransfer(false) 


    const inputChange = (e) => {

        const {name, value} = e.target

        setPaymentDetails({...paymentDetails, [name]: value})
        

    }

    const submitPayment = async(e) => {
        e.preventDefault()
        const {uid} = currentUsers

        console.log(uid)
        try{
            await createPaymentProfile(uid, paymentDetails, paymentDetails)
            alert('Your Wallet will be updated after confirmation, Valar Mohugullis')

        }catch(error){
            console.log(error.message)
        }
        
    }

    console.log(paymentDetails)

    return(
       
        <div className="transfare-wallet">
            <div className='wallet-head'>
                <h2>Manually Fund Wallet</h2>
                <FontAwesomeIcon icon={faXmark} onClick={closeWalletDetails}/>
            </div>
            <div className='account-details'>
                <p><span className='details'>Account Name</span> - Adeyemo Amos Oluwaseun</p>
                <p><span className='details'>Account Number</span> - 2209182574</p>
                <p><span className='details'>Bank Name </span>- Zenith Bank</p>
            </div>
            <div className='wallet-details-input'>
                <form onSubmit={submitPayment}>
                    <p>Fill your Payment Details Here</p>

                    <FormInput
                        placeholder='Amount to Pay'
                        type="number"
                        value={amountToPay}
                       changeHandler={inputChange}
                       name='amountToPay'
                    />
                    <FormInput
                    placeholder='Transaction ID'
                    type="number"
                    changeHandler={inputChange}
                    name='transactionId'
                    value={transactionId}
                     />
                     <FormInput
                     placeholder='Transaction ID'
                     type="hidden"
                     changeHandler={inputChange}
                     name='status'
                     value= 'false'
                      />

                    <button>Confirm Payment</button>
                
                </form>
            
            </div>

       
        
        </div>
       
        
    )
}


export default TransferDetails