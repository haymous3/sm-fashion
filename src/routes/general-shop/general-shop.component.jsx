import { Routes, Route } from "react-router-dom"
import NewShop from "../new-shop/new-shop.component"
import SubCategory from "../sub-categories/sub-categories.component"

const GeneralShop = () => {

    return(
      <Routes>
        <Route index element={<NewShop/>}/>
        <Route path=':category' element={<SubCategory/>}/>
      
      </Routes>
    )
}

export default GeneralShop