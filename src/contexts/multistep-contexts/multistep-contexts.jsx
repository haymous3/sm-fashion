import { useContext, createContext, useState, useEffect } from "react"
import { CartContexts } from "../cart-contexts/cart-contexts"

const MultiStepDetails = [


    {
        section: 1,
        details: []
        

    },
    {
        section: 2,
        detail: [
        {
            label: 'Firstname',
            type: 'text',
            value: 'firstname'

        },
        {
            label: 'LastName',
            type: 'text',
            value:'lastname'

        },
        {
            label: 'E-mail Address',
            type: 'email',
            value:'email'

        },
        {
            label: 'Phone Number',
            type: 'number',
            value:'phone'


        },
        {
            label: 'Country',
            type: 'select',
            option: ['Nigeria'],
            value:'country'

        },
        {
            label: 'State',
            type: 'select',
            option: ['Lagos', 'Ogun', 'Oyo', 'Ondo',],
            value:'state'

        },
        {
            label: 'Zip Code',
            type: 'number',
            value:'zip'

        },
        {
            label: 'Address',
            type: 'text', 
            value:'address'

        }
    ]
        
    },
    {
        section: 3,
        detail_payment: [
            
            [
            {
            label:'Card Number',
            type:'number',
            
        },
         {
            label:'Full Name',
            type:'text',
            
        },
        {
            label:'MM/YY',
            type:'number',
            
        },  {
            label:'CVC',
            type:'number',
            
        },
        {
           
            type:'submit',
            
        },
        
    ]]
    },
    {
        section: 4,
        details:[]
        
    }
]


export const MultiSteps = createContext({
    a: '',
})


export const MultiStepsProvider = ({children}) => {
  
 const {cartItems} = useContext(CartContexts)
   
 const [a, setA] = useState(MultiStepDetails)

    useEffect(() => {
        const initailDetails = MultiStepDetails.map((hey) => {
            if(hey.hasOwnProperty('details') === true){
                hey.details = cartItems
            }
            return {...hey}
        })

         setA(initailDetails)
    }, [cartItems])



    const value = {a}
    console.log(value)

    return <MultiSteps.Provider value={value}>{children}</MultiSteps.Provider>

}



