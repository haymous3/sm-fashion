import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import DashLinks from "../dashLinks/dashLinks.component"
import { UserContexts } from "../../contexts/user-contexts/user-contexts.component"
import './dashboard-nav.styles.scss'

const DashboardNavContent = ({dashboard}) => {

    const {userDetails, currentUsers} = useContext(UserContexts)

    // console.log(currentUsers)

    return(
        <div className="dashboard-content">
            <div className="user-details">
            <div className="user-name">
                <FontAwesomeIcon className="users" icon={faUser}/><br/>
                {
                    currentUsers ?
                     <span className="userdetail-name">{currentUsers.displayName}</span>: null
                }
                <br/>
                {
                    currentUsers ?
                    <span className="userdetail-email">{currentUsers.email || userDetails.email}</span>
                    : null
                }

               
            </div>
         
            <div className="dash-links">

                
                {
                    dashboard.map((dash) => <DashLinks key={dash.id} dashLinks={dash}/>)
                }
            
            </div>
           
            </div>
            <Outlet/>
            
        </div>
    )
}

export default DashboardNavContent