import { useContext } from 'react';
import { NavContents } from '../../../contexts/nav-contexts/nav-contents';
import DashboardNavContent from '../../../components/dashboard-nav/dashboard-nav.component';
import './dashboard-nav-directory.styles.scss'

const DashboardNav = () => {

const { dashboardNav} = useContext(NavContents)

    return(
        <div className="dashboard-nav">
             <DashboardNavContent dashboard={dashboardNav}></DashboardNavContent> 
        </div>
    )
}

export default DashboardNav;