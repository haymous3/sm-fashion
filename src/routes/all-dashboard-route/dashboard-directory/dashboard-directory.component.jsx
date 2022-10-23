import MainDashboard from '../MainDashboard/maindashboard.component'
import DashboardCart from '../DashboardCart/dashboardCart.component'
import DashboardNav from '../dashboard-nav-directory/dashboard-nav-directory.component'
import GeneralTemplate from '../../../components/general-template/general-template.component'
import CompareList from '../dashboard-compare/dashboard-compare.component'
import DashBoardWallet from '../dashboard-wallet/dashboard-wallet.component.'
import ManageProfile from '../dashboard-manage-profile/dashboard-manage-profile'
import { Routes, Route } from 'react-router-dom'
import './dashboard-directory.styles.scss'


const DashBoardDirectory = () => {

    return( 
      <GeneralTemplate>
       <Routes>
        <Route path='/' element={<DashboardNav/>}>
          <Route index element={<MainDashboard/>}/>
          <Route path='cart' element={<DashboardCart/>}/>
          <Route path='compare' element={<CompareList/>}/>
          <Route path='/wallet' element={<DashBoardWallet/>}/>
          <Route path='/profile' element={<ManageProfile/>}/>
        </Route>
       
       </Routes>
       
        
     
      </GeneralTemplate>
     
    )
}

export default DashBoardDirectory