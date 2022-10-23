// import { Fragment } from 'react';
import './form-input.styles.scss'

const FormInput = ({placeholder, name, value, type, changeHandler,ee, readOnly}) => {

    return(
        <div>
            <input className='form-input' placeholder={placeholder} name={name} value={value} type={type} onChange={changeHandler} onFocus={ee} readOnly={readOnly}
             required></input>
        </div>
        
    )
}

export default FormInput;