import { Fragment, useContext } from "react"
import { Amount } from "../../../contexts/cart-card/cart-card.component"

import { UpdateAmountByTransfer } from "../../../contexts/cart-card/cart-card.component"
import CartCard from "../../../components/cart-card/cart-card.compoent"
import TransferDetails from "../../../components/TransferDetails/transferdetails.component"
import { WalletDetails } from "../../../contexts/wallet-contects/wallet-context.component"
import { MainDashBoardDetails } from "../../../contexts/cart-card/cart-card.component"
import './dashoard-wellet.styles.scss'

const DashBoardWallet = () => {
    const {isTransfare, setIsTransfer} = useContext(WalletDetails)
    const {b} = useContext(MainDashBoardDetails)
    const displayTransferForm = () => setIsTransfer(!isTransfare)

    console.log(b)
    console.log(Amount)
    
    return(
        <Fragment>
                {isTransfare && <TransferDetails/>}
            <div className="general-wallet-container">
                <div className="wallet-heading">
                    {
                        Amount.map((amount) => <CartCard key={amount.id} generalWalletProps={amount} maindash={[]}/>)
                    } 
                    {
                        UpdateAmountByTransfer.map((update) => <CartCard key={update.id} generalWalletProps={update} maindash={[]} func={displayTransferForm}/>)
                    }
                </div>

            
            
            
            
            </div>
        
        </Fragment>
    
            
             
           

            
        
        
    )
}

export default DashBoardWallet