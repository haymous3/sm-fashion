import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Shop from "../../components/shop/shop.component"
import { ProductContexts } from "../../contexts/product-contexts/product-contexts"
import { SearchValue } from "../../contexts/search-contexts/search-contexts"
import SearchAll from "../../components/search-all/search-all.component"
import './sub-categories.styles.scss'



const SubCategory = ({footer, shop,}) => {
    const [eachProduct, setEachProduct] = useState([])
    // const [eachSearch, setEachSearch] = useState('')      
    const [filteredEach, setFilteredEach] = useState(eachProduct)
    const {allProduct} = useContext(ProductContexts)
    const {searchValue, searchResult} = useContext(SearchValue)
   
    const {category} = useParams()

    useEffect(() => {
        allProduct.map((cow) => (cow.catergories === category) ? setEachProduct(cow.items) : null)

    }, [allProduct, category])

    useEffect(() => {
        const newEachProduct = eachProduct.filter((hey) => hey.name.toLowerCase().includes(searchValue))
        setFilteredEach(newEachProduct)
    }, [searchValue, eachProduct])

    console.log(eachProduct)
    console.log(filteredEach)
  
   
    return(
        
        <Shop>
        <div className='shop-directory'>
        <div className="looking-for">
        <input type='search' placeholder="I'm looking for" onChange={searchResult} />
        <h2>Search Result - {searchValue}</h2>
        
        </div>
        <h2 className="caart">{category.toLocaleUpperCase()}</h2>

       
        <SearchAll  product={filteredEach}  shop="shop-cont"/>

        </div>
        </Shop>
        
     
    )
}


export default SubCategory