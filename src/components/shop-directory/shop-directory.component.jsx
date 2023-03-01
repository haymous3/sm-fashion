

// import { ProductContexts } from "../../contexts/product-contexts/product-contexts";
import Services from "../services/services.component"
import SearchBox from "../searchBox/searchBox.component";
// import { SearchValue } from "../../contexts/search-contexts/search-contexts";
// import ViewedProduct from "../viewed-product/viewed-product.component"
import './shop-directory.style.scss'


const ShopDirectory = ({children}) => {

    


   


    return(
        
        
            <div className="shop-directory">
            <SearchBox/>
            
                <div> 
            
                {
                
                    children.map((hey) =><Services key={hey.id} product={hey.items || hey.itemss} catergories={hey.catergories} shop="shop-cont"/>  )
                }
                </div>
            
                
            
            
            </div>
        
       
       
    )
}

export default ShopDirectory