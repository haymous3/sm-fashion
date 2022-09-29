import { useContext } from 'react'
import { NavContents } from '../../contexts/nav-contexts/nav-contents'
import {Link } from 'react-router-dom'
import './nav-content.styles.scss'
const NavContent = ({nav}) => {
        const {home, shop, about} = nav

        const {setIsNavOpen} = useContext(NavContents)

        const clear = () => setIsNavOpen(false)
    return(
        <div className="navs ">
        <Link to='/' onClick={clear}>{home.toUpperCase()}</Link>
        <Link to='/shop' onClick={clear}>{shop.toUpperCase()}</Link>
        <Link to='/about' onClick={clear}>{about.toUpperCase()}</Link>

        
        </div>
    )
}

export default NavContent