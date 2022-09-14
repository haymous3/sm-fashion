import { useContext } from "react";
import { ProductContexts } from "../../contexts/product-contexts/product-contexts";
import Services from "../services/services.component"
import ViewedProduct from "../viewed-product/viewed-product.component"
import './shop-directory.style.scss'


const ShopDirectory = () => {

    const {allProduct} = useContext(ProductContexts)

    // console.log(shopherodetails)


    return(
        <div className="shop-directory">
            <ViewedProduct/>
            <Services product={allProduct} shop="shop-cont"/>
        
        
        </div>
    )
}

export default ShopDirectory