import CartCard from "../../../components/cart-card/cart-card.compoent"
import { useContext, useState } from "react"
import { MainDashBoardDetails } from "../../../contexts/cart-card/cart-card.component"
import { CartContexts } from "../../../contexts/cart-contexts/cart-contexts"
import BarChart from "../../../components/Barchat/barchat.component"

import './maindashboard.styles.scss'

const MainDashboard = () => {

    const {a} = useContext(MainDashBoardDetails)
    const {cartItems} = useContext(CartContexts)

 
    const [cartDetails] = useState({
        labels: cartItems.map((data) => data.name),
        datasets:[{
            label: "No of Item Selected",
            data:cartItems.map((data) => data.quantity),
            backgroundColor: ['#f4f4f4']
        }]
    })
 

    console.log(a)
   
    return(
            <div className="main-dashboard">

                <div className="each-card">
                    {
                        a.map((dash) => <CartCard key={dash.id} maindash={dash} generalWalletProps={[]}/>)
                        
                    }
                
                </div>
                <div className="bar-chart">
                    <BarChart chartData={cartDetails}/>
                
                </div>
            </div> 
    )
}

export default MainDashboard