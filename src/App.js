import {Routes, Route} from 'react-router-dom';
import Navigations from './routes/Navigations/navigations.component';
import HomePage from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';






const App = () => {

  

  return(
    
    

    <Routes>
      <Route path='/' element={<Navigations/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/shop' element={<Shop/>}/> 
        <Route path='/checkout' element={<CheckOut/>}/>
      </Route>
     
  

   </Routes>
    
   
  )

}



export default App;