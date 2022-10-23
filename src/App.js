import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/Navigation/navigation.component';
import HomePage from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';
import AuthPage from './routes/auth/auth.component';
import DashBoardDirectory from './routes/all-dashboard-route/dashboard-directory/dashboard-directory.component';



const App = () => {

  

  return(
    
    

    <Routes>
       <Route path='/' index element={<HomePage/>}/>
        <Route path='/' element={<Navigation/>}>
         <Route path='shop' element={<Shop/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
          <Route path='auth' element={<AuthPage/>}/>
          <Route path='dashboard/*' element={<DashBoardDirectory/>}/>
        </Route>
        
   </Routes>
    
   
  )

}



export default App;