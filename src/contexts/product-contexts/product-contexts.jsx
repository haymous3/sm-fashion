import { createContext, useState } from 'react'
import { FirstProduct, SecondProduct,ThirdPoduct, FourthProduct, ServiceDetails, FooterDetails,AllProduct } from '../../product-listing'



export const ProductContexts = createContext({
    firstProduct : '',
    secondProduct: '',
    thirdProduct:'',
    fourthProduct:'',
    serviceDetails:'',
    footerDetails:'',
    allProduct:''

});




export const ProductProvider = ({children}) => {
    const [firstProduct] = useState(FirstProduct)
    const [secondProduct] = useState(SecondProduct)
    const [thirdProduct] = useState(ThirdPoduct)
    const [fourthProduct] = useState(FourthProduct)
    const [serviceDetails] = useState(ServiceDetails)
    const [footerDetails] = useState(FooterDetails)
    const [allProduct] = useState(AllProduct)



    const value = {firstProduct, secondProduct, thirdProduct, fourthProduct, serviceDetails, footerDetails,allProduct}


    return <ProductContexts.Provider value={value}>{children}</ProductContexts.Provider>
}