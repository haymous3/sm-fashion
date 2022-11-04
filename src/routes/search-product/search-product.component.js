import { Fragment } from "react"
import Shop from "../../components/shop/shop.component"
import SearchProductDirectory from "../../components/search-product-directory/search-product-directory.component"


const SearchProduct = () => {
  

    return(
      <Fragment>
        <Shop>
            <SearchProductDirectory/>
        </Shop>
      
      </Fragment>
    )
}

export default SearchProduct