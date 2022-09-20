import './buttons.styles.scss';


export const BUTTON_TYPES = {
    addtocart: 'addtocart',
    checkout: 'checkout'
}

const Button = ({children, buttonTypes, func}) => {

    return(
       <button className={`${BUTTON_TYPES[buttonTypes]}`} onClick={func}>{children}</button>

        
    )
}

export default Button