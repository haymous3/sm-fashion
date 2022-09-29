import { useContext } from "react"
import { NavContents } from "../../contexts/nav-contexts/nav-contents"
import Navigations from "../../components/nav/nav.component"


const Navigation = () => {

    const {generalNav} = useContext(NavContents)


    return (
        <Navigations navlinks={generalNav} general='generalNav'/>
    )
    
}

export default Navigation

 