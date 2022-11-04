// import { useContext } from "react"
// import Services from "../services/services.component"                                             
// import { SearchValue } from "../../contexts/search-contexts/search-contexts"
// import { ProductContexts } from "../../contexts/product-contexts/product-contexts"

// const SearchMainDirectory = ({children}) => {
//     const {searchResult} = useContext(SearchValue)
//     const {searchProduct} = useContext(ProductContexts)
//     console.log(searchProduct)

//     return(
//         <div className="shop-directory">
//         <input type='search' placeholder="I'm looking for" onChange={searchResult}/>
            


//             <div> 
            
//             {
            
//                 children.map((hey) =><Services key={hey.id} product={hey.items || hey.itemss} catergories={hey.catergories} shop="shop-cont"/>  )
//             }
//             </div>
//         </div>
//     )
// }

// export default SearchMainDirectory