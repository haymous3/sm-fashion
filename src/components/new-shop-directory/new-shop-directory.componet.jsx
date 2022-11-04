import { useContext } from "react"
import { ProductContexts } from "../../contexts/product-contexts/product-contexts"
import ShopDirectory from "../shop-directory/shop-directory.component"

const NewShopDirectory = () => {
    const {allProduct, searchProduct} = useContext(ProductContexts)
console.log(allProduct)
console.log(searchProduct)
    return(
        <ShopDirectory>
        {allProduct}
        </ShopDirectory>
    )
}

export default NewShopDirectory