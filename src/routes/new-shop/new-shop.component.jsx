import { Fragment } from "react"
import Shop from "../../components/shop/shop.component";
import NewShopDirectory from "../../components/new-shop-directory/new-shop-directory.componet";
// import ShopDirectory from "../../components/shop-directory/shop-directory.component";

const NewShop = () => {

    return(
        <Fragment>
        <Shop>
            <NewShopDirectory/>
        </Shop>
        
        </Fragment>
    )

}

export default NewShop