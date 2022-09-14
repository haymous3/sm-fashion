import {useContext} from 'react'
import { ImageContexts } from '../../contexts/image-contexts/image-contexts'
import './heroes.scss'


const Heroes = ({heros}) => {

    const {content, payment, footerlogo, background} = heros

const hero = useContext(ImageContexts)
    return(
        <div className="footer-top-area" style={{
            'backgroundImage': `url(${hero[background]})`
        }}>
            <img src={`${hero[footerlogo]}`} alt="footer-logo"/>
            <p>{content}</p>
            <div className="payment">

                <img src={`${hero[payment]}`} alt="payment"/>
            
            </div>
        </div>

    )
}


export default Heroes;