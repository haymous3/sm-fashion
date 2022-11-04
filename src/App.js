import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/Navigation/navigation.component';
import HomePage from './routes/home/home.component';
import GeneralShop from './routes/general-shop/general-shop.component';
import CheckOut from './routes/checkout/checkout.component';
import AuthPage from './routes/auth/auth.component';
import SearchProduct from './routes/search-product/search-product.component';
import DashBoardDirectory from './routes/all-dashboard-route/dashboard-directory/dashboard-directory.component';



const App = () => {

  

  return(
    
    

    <Routes>
       <Route path='/' index element={<HomePage/>}/>
        <Route path='/' element={<Navigation/>}>
         <Route path='shop/*' element={<GeneralShop/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
          <Route path='auth' element={<AuthPage/>}/>
          <Route path='search' element={<SearchProduct/>}/>
          <Route path='dashboard/*' element={<DashBoardDirectory/>}/>
        </Route>
        
   </Routes>
    
   
  )

}



export default App;