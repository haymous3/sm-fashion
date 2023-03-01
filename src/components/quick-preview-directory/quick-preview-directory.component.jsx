import { useContext } from "react"
import { OpenReview } from "../../contexts/open-review/open-review.component"

import { CartContexts } from "../../contexts/cart-contexts/cart-contexts"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import ReviewCard from "../review-card/review-card.component"
import './quick-preview-directory.scss'
const QuickReview = () => {

    const {openReview, setOpenReview} = useContext(OpenReview)
    const {review} = useContext(CartContexts)
 
    const closeNav = () => setOpenReview(!openReview)
    console.log(review)

    return(
        <div className="quick-preview">

        <div className="quick-content">
        <div className="quick-preview-head">
        {
            review.map((hey) => <p key={hey.id}>{hey.name}</p>)
         }
         <FontAwesomeIcon icon={faXmark} onClick={closeNav}/>
        </div>
        {
            review.map((hey) => <ReviewCard key={hey.id} reviews={hey}/>)
        }
        
        </div>
       
        
    
        
        </div>
    )
}

export default QuickReview