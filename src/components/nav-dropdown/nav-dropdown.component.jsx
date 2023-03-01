import { Fragment, useContext } from "react"
import { NavContents } from "../../contexts/nav-contexts/nav-contents"
import NavContent from "../nav-content/nav-content.component"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import './nav-dropdown.styles.scss' 





const NavDropDown = () => {

    const {generalNav, isNavOpen, setIsNavOpen} = useContext(NavContents)


    const closeNav = () => setIsNavOpen(!isNavOpen)
    console.log(generalNav)

    return(
        <div className="nav-dropdown">
            <FontAwesomeIcon icon={faXmark} onClick={closeNav}/>
            <Fragment>
            {
                generalNav.map((nav) => <NavContent key={nav.id} nav={nav}/>)
            }
            
            </Fragment>
        
        </div>
    )
}

export default NavDropDown