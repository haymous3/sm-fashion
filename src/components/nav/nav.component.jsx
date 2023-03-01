import { Fragment, useContext } from "react";
// import { Link } from "react-router-dom";
import { UserContexts } from "../../contexts/user-contexts/user-contexts.component";
import { LogOut } from "../../utlities/firebase/firebase";
import { checkProvider } from "../../utlities/firebase/firebase";
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import NavDropDown from "../nav-dropdown/nav-dropdown.component";
import BodyBg from "../body-bg/body-bg.component";
import { CartContexts } from '../../contexts/cart-contexts/cart-contexts'
import { OpenReview } from "../../contexts/open-review/open-review.component";

import QuickReview from "../quick-preview-directory/quick-preview-directory.component";
import { NavContents } from "../../contexts/nav-contexts/nav-contents";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faBars} from '@fortawesome/free-solid-svg-icons'
import NavContent from "../nav-content/nav-content.component";
import Button from "../buttons/buttons.component";
import {  Outlet, useNavigate } from "react-router-dom";
import './nav.style.scss'

export const GENERAL_NAV = {
    generalNav:'generalNav',
    homenav: 'homenav'
}

const Navigations = ({navlinks, general}) => {
    const {isCartOpen, setIsCartOpen, quantity} = useContext(CartContexts)
    const {isNavOpen, setIsNavOpen} = useContext(NavContents)
    const {currentUsers,setCurrentUsers, userDetails} = useContext(UserContexts)
    const {openReview} = useContext(OpenReview)

    // const displayTransferForm = () => setIsTransfer(!isTransfare)
    
    
    
  
  console.log(userDetails)
  console.log(currentUsers)
 if(checkProvider() ==='google.com'){
    console.log('yes')
 }
  const signOut = () => {
    
    LogOut();

  

    alert('Account Logged Out Succesfully')

    navigation('/')

    setCurrentUsers(null)

   
// if(currentUsers === null){
//     setQuantity(0)
// }

    
  }

  const navigation = useNavigate()

  const toAuth = () => {
    navigation('/auth')
  }

  const todashboard = () => {
    navigation('/dashboard')
  }
   
    const openNav = () => setIsNavOpen(!isNavOpen)
    const displayCart = () => setIsCartOpen(!isCartOpen)
    return(
        <Fragment>

        {
            isNavOpen && <NavDropDown/> 
        }
        {
           openReview && <QuickReview/> 
        }
       
        <BodyBg>
       
            <div className={`${GENERAL_NAV[general]}`}>
           
                <div className='title'>
               
                    <span>SOMA</span>
                   <FontAwesomeIcon icon={faBars} onClick={openNav}/>
                
                </div>
                {
                    navlinks.map((nav) => <NavContent key={nav.id} nav={nav}/>)
                }
                <div className="nav-details">
                   {currentUsers ? 
                    <span className="welcome"> {  currentUsers.displayName  }</span>  : null}
                    {currentUsers ? 
                        <Button func={todashboard} buttonTypes='google'>My Dashboard</Button>  : null}
                        {currentUsers ? 
                            <Button to='dashbord' buttonTypes='signup' func={signOut}>LogOut</Button>  : <button className='try' onClick={toAuth}>Log IN</button>}
                    <FontAwesomeIcon className="iccon" icon={faCartShopping} onClick={displayCart}/>
                    {
                         <span className="nav-quanties">{quantity}</span> 
                    }
                   
                   
                </div>
                {
                    isCartOpen && <CartDropDown/>
                }
               
                
            
            </div>
           
            <Outlet/>
        </BodyBg >
        </Fragment>
    
    
    )
}

export default Navigations

 