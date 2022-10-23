import { faHouse,faCartShopping, faCreditCard, faCodeCompare, faWallet, faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { createContext, useState } from "react"



const NAV_DETAILS_ONE = [
    {
        id:1,
        home:'home',
        about:'about us',
        shop:'shop'

    }
]

const DASHBOARD_NAV = [
    {
        id: 1,
        name: 'Dashboard',
        route: "/dashboard",
        icons: faHouse

    },
    {
        id: 2,
        name: 'My Cart',
        route: "/dashboard/cart",
        icons: faCartShopping
    },
    {
        id: 3,
        name: 'My Orders',
        route: "/dashboard/orders",
        icons: faCreditCard
    },
    {
        id: 4,
        name: 'Compare',
        route: "/dashboard/compare",
        icons: faCodeCompare
    },
    {
        id: 5,
        name: 'My Wallet',
        route: "/dashboard/wallet",
        icons: faWallet
    }, 
    {
        id: 6,
        name: 'Manage Profile',
        route: "/dashboard/profile",
        icons: faAddressCard
    }, 
]



export const NavContents = createContext({
    generalNav: '',
    isNavOpen: false,
    setIsNavOpen: () => {},
    dashboardNav: ''
   
})



export const NavProvider = ({children}) => {

    const [generalNav] = useState(NAV_DETAILS_ONE)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [dashboardNav] = useState(DASHBOARD_NAV)
   

    const value = {generalNav, isNavOpen, setIsNavOpen, dashboardNav}


    return <NavContents.Provider value={value}>{children}</NavContents.Provider>
}