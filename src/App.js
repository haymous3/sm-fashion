import {Routes, Route} from 'react-router-dom';
import HomePage from './routes/home/home.component';
import Shop from './routes/shop/shop.component';






const App = () => {

  

  return(
    
    

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<Shop/>}/>
  

   </Routes>
    
   
  )

}



export default App;