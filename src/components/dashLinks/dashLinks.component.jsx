import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './dashLinks.styles.scss'
const DashLinks = ({dashLinks}) => {
    const {name, route, icons} = dashLinks
    return(
        <div className="each-links">
            <FontAwesomeIcon icon={icons}></FontAwesomeIcon>
            <Link to={`${route}`} className="active">{name}</Link>
        </div>
    )
}

export default DashLinks