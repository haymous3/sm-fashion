import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import { SearchValue } from "../../contexts/search-contexts/search-contexts"






const SearchBox = () => {

    const {searchResult} = useContext(SearchValue)

    const navigate = useNavigate()

    const goToSearchProduct = () => {
        navigate('/search')
    }


    const SubmitSearch = () =>{
        goToSearchProduct()
    } 
    
  


    return(
        <form onSubmit={SubmitSearch}>
             <input type='search' placeholder="I'm looking for" onChange={searchResult}/>
             <button>Search Product</button>
        </form>
        
    )
}


export default SearchBox



