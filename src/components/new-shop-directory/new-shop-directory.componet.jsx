import { useContext } from "react"
import { ProductContexts } from "../../contexts/product-contexts/product-contexts"
// import QuickReview from "../quick-preview-directory/quick-preview-directory.component";
// import { OpenReview } from "../../contexts/open-review/open-review.component";
import ShopDirectory from "../shop-directory/shop-directory.component"

const NewShopDirectory = () => {
    const {allProduct} = useContext(ProductContexts)
  
// console.log(allProduct)
// console.log(searchProduct)
    return(
        
           
            <ShopDirectory>
            {allProduct}
            </ShopDirectory>
    
      
    )
}

export default NewShopDirectory