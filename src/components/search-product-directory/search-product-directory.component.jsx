import { useContext } from "react"
import { ProductContexts } from "../../contexts/product-contexts/product-contexts"
import { SearchValue } from "../../contexts/search-contexts/search-contexts"
import SearchAll from "../search-all/search-all.component"
import './search-product-directory.styles.scss'
// import Services from "../services/services.component"

const SearchProductDirectory = () => {

    const {searchProduct} = useContext(ProductContexts)
    const {searchResult, searchValue} = useContext(SearchValue)

    console.group(searchProduct)
    return(
        <div className="shop-directory">
            <div className="looking-for">
                <input type='search' placeholder="I'm looking for" onChange={searchResult}/>
                <h2>Search Result - {searchValue}</h2>
                
            </div>
        


     {
          searchProduct.map((hey) => (hey !== null) ? <SearchAll key={hey.id} product={hey.items || hey.itemss} catergories={hey.catergories} shop="shop-cont"/>: '')
         }


      
        
        </div>
    )
}

export default SearchProductDirectory