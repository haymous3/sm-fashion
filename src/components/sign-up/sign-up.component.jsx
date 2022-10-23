import { useState } from "react";
import { CreateUserWithEmailAndPassword, createUserProfile, updateUserProfiles } from "../../utlities/firebase/firebase";
import FormInput from "../form-inputs/form-input.component";
import Button from "../buttons/buttons.component";
import { useNavigate } from "react-router-dom";
// import { async } from "@firebase/util";


const SignUp = () => {
    const SignUpDetails = {
        displayName: '',
        email: '',
        password:'',
        confirmPassword: ''
    
    }
    const [formfields, setformfield] = useState(SignUpDetails)

const {displayName, email, password, confirmPassword} = formfields

    const navigate = useNavigate();


    const handlerChange = (e) => {
        const {value, name} = e.target

        setformfield({...formfields, [name]:value})
    }

    const resetfiled = () => {
        setformfield(SignUpDetails)
    }

    const handleSubmit = async(event) => {

        event.preventDefault()

        if(password !== confirmPassword){
            alert('Password Incorrect')
            return
        } 

        if(password.length < 5){
            alert('Password is to weak')
            return
        }

        try{
          const {user} = await CreateUserWithEmailAndPassword(email, password)

          console.log(user)

          await createUserProfile(user, formfields)
          await updateUserProfiles(displayName)

          alert('Account registered succesfully')

          

            resetfiled()

            navigate('/')
           
          

        }catch(error){
            alert(error.message)
        }
       

        
    }
  

    return(
        <div className="register">
            <h2>Don't have an Account</h2>
            <span>SignUp here to get started</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    value={displayName}
                    changeHandler={handlerChange}
                    placeholder='Enter your Name'
                    name='displayName'>
                </FormInput>
                <FormInput
                    type='email'
                    value={email}
                    changeHandler={handlerChange}
                    placeholder='Enter your email'
                    name='email'>
                </FormInput>
                <FormInput
                    type='password'
                    value={password}
                    changeHandler={handlerChange}
                    placeholder='Enter your Password'
                    name='password'>
                </FormInput>
                <FormInput
                    type='password'
                    value={confirmPassword}
                    changeHandler={handlerChange}
                    placeholder='Confirm Password'
                    name='confirmPassword'>
                </FormInput>

                <Button buttonTypes='signup'>SIGN UP</Button>
            
            
            </form>
        
        </div>
    )
}


export default SignUp;