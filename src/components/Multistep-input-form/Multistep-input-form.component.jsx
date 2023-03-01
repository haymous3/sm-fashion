// import FormInput from "../form-inputs/form-input.component";
import { Fragment, useState} from "react"
import './Multistep-input-form.styles.scss'



const MultistepInput = ({forms, onchange, answers}) => {

    const [currentValue] = useState(answers || null)

// const valueFields = (e) => onchange(forms.value, e.target.value)


    
   


return(
        <Fragment>

        {
    
            (forms.type) === 'text' ? 
            <div className="multi-input">
            <Fragment>
            <label>{forms.label}</label><br/>
            <input type='text'
             name='firstName'
              value={currentValue} 
              onChange= {(e) => onchange(forms.value, e.target.value)}/> 
             </Fragment>
            </div>
            :
            ( forms.type )=== 'email' ? 
            <div className="multi-input">
            <Fragment>
                <label>{forms.label}</label><br/>
                <input type='email' 
                value={currentValue}
                onChange= {(e) => onchange(forms.value, e.target.value)}/> 
            </Fragment>
            </div>
           : 
            ( forms.type )=== 'number' ? 
            <div className="multi-input">
            <Fragment>
                <label>{forms.label}</label><br/>
                <input type='number' value={currentValue} onChange= {(e) => onchange(forms.value, e.target.value)}/>  
            </Fragment>
            </div>
           : 
            ( forms.type )=== 'select' ? 
            <div className="multi-input">
            <Fragment>
                <label>{forms.label}</label><br/>
                <select onChange= {(e) => onchange(forms.value, e.target.value)} >
                    <option>{forms.label}</option>
                    {
                        forms.option.map((hey) => <option key={hey} value={hey}>{hey}</option>)
                    }
                </select>
            </Fragment>
            </div> :
            ( forms.type )=== 'submit' ? 
            <div className="multi-input">
            <Fragment>
            <input type='submit' value="Submit" /> 
            </Fragment>
            </div>
            : null
        }
        
       
      
        
        </Fragment>
 

)
} 


export default MultistepInput