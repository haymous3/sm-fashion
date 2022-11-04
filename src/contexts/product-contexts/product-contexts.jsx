import { createContext, useState, useContext, useEffect } from 'react'
import { FirstProduct, SecondProduct,ThirdPoduct, FourthProduct, ServiceDetails, FooterDetails,AllProduct } from '../../product-listing'
import { SearchValue } from '../search-contexts/search-contexts';




export const ProductContexts = createContext({
    firstProduct : '',
    secondProduct: '',
    thirdProduct:'',
    fourthProduct:'',
    serviceDetails:'',
    footerDetails:'',
    allProduct:'',
    searchProduct: [],
    setSearchProduct: () => {}

});

   


export const ProductProvider = ({children}) => {
    const {searchValue} = useContext(SearchValue)
    const [firstProduct] = useState(FirstProduct)
    const [secondProduct] = useState(SecondProduct)
    const [thirdProduct] = useState(ThirdPoduct)
    const [fourthProduct] = useState(FourthProduct)
    const [serviceDetails] = useState(ServiceDetails)
    const [footerDetails] = useState(FooterDetails)
    const [allProduct] = useState(AllProduct)
    const [searchProduct, setSearchProduct] = useState([])

    console.log(allProduct)
  
  
console.log(searchValue)
    useEffect(() => {
        
    
         const product = allProduct.map(({catergories, items}) => {

           const itemss = items.filter((hey) => hey.name.toLowerCase().includes(searchValue))

        //    console.log(itemss)
               if(itemss.length > 0){
                return {catergories, itemss}
               }else{
                
                return null
               }
                
            

        })
        setSearchProduct(product)
    }, [searchValue, allProduct])
   

    console.log(searchProduct)

//     useEffect(() => {
        
//    const product = allProduct.map((hey) => [{...hey}])

//    setSearchProduct(product)
//    }, [searchValue, allProduct])
  

//    console.log(searchProduct)
//     // const productCategory = allProduct.map((cow) => cow.catergories)

   

    // const searchNewProduct = product.map((hey) => {
    //     return hey.map((cow) => cow.name)
        
    // })

    // console.log(searchNewProduct)

    // useEffect(() => {
        
        

      
    //     setSearchProduct(searchNewProduct)
    // }, [product, searchValue])

    // console.log(searchProduct)

    const value = {firstProduct, secondProduct, thirdProduct, fourthProduct, serviceDetails, footerDetails,allProduct, searchProduct}


    return <ProductContexts.Provider value={value}>{children}</ProductContexts.Provider>
}