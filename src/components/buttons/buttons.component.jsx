import './buttons.styles.scss';


export const BUTTON_TYPES = {
    addtocart: 'addtocart',
    checkout: 'checkout',
    signup: 'signup',
    google: 'google'
}

const Button = ({children, buttonTypes, func, type}) => {

    return(
       <button className={`${BUTTON_TYPES[buttonTypes]}`} onClick={func}  type={type}>{children}</button>

        
    )
}

export default Button