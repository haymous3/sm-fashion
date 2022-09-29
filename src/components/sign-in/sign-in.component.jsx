import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormInput from "../form-inputs/form-input.component"
import { SignInWithGoogle, createUserProfile, SignInWithEmailAndPasword } from "../../utlities/firebase/firebase"
import Button from "../buttons/buttons.component"
import './sign-in.styles.scss'
// import { async } from "@firebase/util"


const SignIn = () => {
    const SignInDetails = {
        email:'',
        password: ''
    }
    
    const navigation = useNavigate()

    const [formfields, setformfield] = useState(SignInDetails)
    const {email, password} = formfields

    const handlerChange = (e) => {
        const {value, name} = e.target

      setformfield({...formfields, [name]: value})

    }

    const resetfiled = () => {
        setformfield(SignInDetails)

    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
          const response =  await SignInWithEmailAndPasword(email, password)

          alert('You have succesfully login to your Account')
         
          navigation('/')

          console.log(response)

            resetfiled()
        }catch(error){
            alert(error.message)
        }
        
    }

    
       
    
        const googleSign= async() => {
         await SignInWithGoogle()
    
        //  console.log(user)
    
        //  await createUserProfile(user)
      
            alert('You have succesfully login to your Account')
              
            navigation('/')
          
       
        }

    return(

        <div>
        <h2>Have an Account?</h2>
        <span>Login in with your Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    type='email'
                    value= {email}
                    name='email'
                    placeholder='Enter your Email'
                    changeHandler={handlerChange}
                >
                </FormInput>

                <FormInput
                type='password'
                value= {password}
                name='password'
                placeholder='Enter your Password'
                changeHandler={handlerChange}
                >
                </FormInput>
        
                <div className="sign-in-option">
                    <Button type='submit' buttonTypes='signup'>SIGN IN</Button>
                    <Button type='submit' buttonTypes='google' func={googleSign}>SIGN WITH GOOGLE</Button>
                </div>
              
        
            </form>
        
        
        </div>
      
    )
}

export default SignIn; 