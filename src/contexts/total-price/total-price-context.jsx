import { createContext, useContext, useState, useEffect } from "react";
import { UserContexts } from "../user-contexts/user-contexts.component";
import { getItemsDetails } from "../../utlities/firebase/firebase";



export const TotalPriceContexts = createContext({
    totalPriceItem:0,
    setTotalPrice: () => {},
    itemandtotalPrice: [],
    setItemamdTotalPrice: () => {}

})

 

export const TotalPriceProvider = ({children}) => {

    const {currentUsers} = useContext(UserContexts)
    const [itemandtotalPrice, setItemamdTotalPrice] = useState([])
    const [totalPriceItem, setTotalPriceItem] = useState(0)



    useEffect(() => {

        let cartandprice = []

        for(let items in itemandtotalPrice){
            cartandprice = itemandtotalPrice[items]
        }

       const theTotalPrice = cartandprice.reduce((start, finish) => start + finish.totalprice, 0)


       setTotalPriceItem(theTotalPrice)


    }, [itemandtotalPrice])



    useEffect(() => {
        const getItemsandPrice = async() => {
            const theItemsamdPrice = await getItemsDetails(currentUsers.uid)

            setItemamdTotalPrice(theItemsamdPrice)
        }

        getItemsandPrice()

    }, [currentUsers])


    console.log(itemandtotalPrice)




const value = {itemandtotalPrice, totalPriceItem}

    return <TotalPriceContexts.Provider value={value}>{children}</TotalPriceContexts.Provider>
}