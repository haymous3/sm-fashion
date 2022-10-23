import { useContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
import { UserContexts } from "../../../contexts/user-contexts/user-contexts.component"
import { checkProvider, updateUserProfiles,createUserProfile } from "../../../utlities/firebase/firebase"
import FormInput from "../../../components/form-inputs/form-input.component"
import { UpdateUserPassword } from "../../../utlities/firebase/firebase"
import './dashboard-manage-profile.scss'

const ManageProfile = () => {
   
    const updatedValue = {
        displayName:'',
        name:'',
        email:'',
        password:'',
        phone_Number:'',
        confirmPassword:''
    }

    // const navigate = useNavigate()

    // const naviga = () => {
    //     navigate('/dashboard')
    // }
   
    const {currentUsers,userDetails} = useContext(UserContexts)
    const [updateValue, setUpdateValue] = useState(updatedValue)

    let {displayName, email, password, phone_Number, confirmPassword} = updateValue 
      
   const a = (e) => {
    const {name} = e.target
    setUpdateValue({...updateValue, [name]:currentUsers[name] || userDetails[name]})
   }
    const updateChangler = (e) => {
      
  
        const {value, name} = e.target
        // if(updateValue.name.length === 1){
        //     setUpdateValue({...updateValue, [name]: ''})
        // }
        setUpdateValue({...updateValue, [name]:value })
      
            
     
       
    }

    const changePassword = () =>{
         UpdateUserPassword(password)
         
    }

    const handleSubmitt = async(e) => {
        e.preventDefault()
        if(checkProvider() === 'password' && password !== confirmPassword){
            alert('Password do not match')
            return
        } 
        if(checkProvider() === 'password' && password.length < 5){
            alert('Password is to weak')
            return
        }
        changePassword()
       
        await updateUserProfiles(displayName, updateValue)
        await createUserProfile(currentUsers, '', phone_Number, displayName, password,confirmPassword)


        alert('done')

        
    } 

    
    // const newUpdatedValue = (e) => {
    //     let {value} = e.target
    //  value = name
    //  return value

    // }
    console.log(updateValue)    
    return(
        <div className="profile-form">
            <form onSubmit={handleSubmitt}>
                <div className="form-options">
                    <p>Your Name</p>
                    <FormInput
                    name='displayName'
                    value={displayName}
                  ee={a}
                    changeHandler={updateChangler}
                   placeholder={'Your Name'}/>
                    
                </div>
                <div className="form-options">
                    <p>Your Email</p>
                    <FormInput
                    name='email'
                    ee={a}
                    readOnly={email}
                    value={email}
                    changeHandler={updateChangler}
                    placeholder={'same as your login email'}/>
                </div>
                <div className="form-options">
                    <p>Your Phone Number</p>
                    <FormInput
                    type='number'
                    name='phone_Number'
                    value={phone_Number}
                    ee={a}
                    changeHandler={updateChangler}/>
                </div>
                {
                    checkProvider() === 'password' ? 
                        <div className="form-options">
                        <p>Password</p>
                        <FormInput
                        type='password'
                        name='password'
                        value={password}
                        ee={a}
                        changeHandler={updateChangler}/>
                    </div>
                  
                    : null
                }


                {
                    checkProvider() === 'password' ?
                    <div className="form-options">
                    <p>Confirm Password</p>
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    ee={a}
                    changeHandler={updateChangler}/>
                </div>
                : null
                }
                
              
                <div className="update-button">
                    <button>Update</button>
                </div>
                
            </form>
        
        </div>
    )
}

export default ManageProfile