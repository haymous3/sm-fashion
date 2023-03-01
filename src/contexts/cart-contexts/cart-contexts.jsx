import { createContext, useState, useEffect, useContext } from "react";
import { UserContexts } from "../user-contexts/user-contexts.component";


// creating a helper function to help us add item to our cart

const addToCart = (cartitems, product) => {
  const existingProduct = cartitems.find((item) => item.id === product.id)

  if(existingProduct){
    return cartitems.map((item) => item.id === product.id ? 
    {...item, quantity : item.quantity + 1}: item )
  }
alert('Added to cart')
return [...cartitems, {...product, quantity: 1}]
}
const reviews = (cartitems, product) => {
  const existingProduct = cartitems.find((item) => item.id === product.id)

  if(existingProduct){
    return cartitems.map((item) => item.id === product.id ? 
    {...item, quantity : item.quantity + 1}: item )
  }

return [ {...product, quantity: 1}]
}

const increaseProduct = (cartitems, product) => {
  const existingProduct = cartitems.find((item) => item.id === product.id)

  if(existingProduct){
    return cartitems.map((item) => item.id === product.id ? 
    {...item, quantity : item.quantity + 1}: item )
  }
}

const decreaseProduct = (cartitems, product) => {
  const existingProduct = cartitems.find((item) => item.id === product.id)

  if(existingProduct){
    return cartitems.filter((item) => item.quantity > 1).map((item) => item.id === product.id ? 
    {...item, quantity : item.quantity - 1}: item )
  }
}

const clearProduct = (cartitems, product) => {
  const existingProduct = cartitems.find((item) => item.id === product.id)

  if(existingProduct){
    return cartitems.filter((item) => item.id !== product.id)
  }
}

export const CartContexts = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
    cartItems: [],
    addToMyCart: () => {},
    quantity:0,
    setQuantity: () => {},
    increaseProducts: () => {},
    decreaseProducts:() => {},
    clearProducts: () => {},
    totalprice: 0,
    setTotalPrice: () => {},
    clearAllCart: () => {},
    newreiew: () => {},
    review: []

})


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(0)
    
    const [totalprice, setTotalPrice] = useState(0)
    const [review, setReview] = useState([])

 
    const {currentUsers} = useContext(UserContexts)
    useEffect(() => {
      const totalQuantity = cartItems.reduce((start, finish) => {
        return start + finish.quantity
  
      }, 0)
        setQuantity(totalQuantity)
    }, [cartItems])

    useEffect(() => {
      const totalCartPrice = cartItems.reduce((start,finish) => {
        return  Math.floor(start + (finish.price * finish.quantity))
      }, 0)


      setTotalPrice(totalCartPrice)
    }, [cartItems])

    useEffect(() => {
     if(currentUsers === null){
      setCartItems([])
     }
    }, [currentUsers])

 
    

    
    const addToMyCart = (product) => {
      setCartItems(addToCart(cartItems, product))

      console.log(cartItems)
    }

    
  
        const newreiew = (product) => {
          setReview(reviews(cartItems, product))
        }
        

    

    const increaseProducts =(product) => {
      setCartItems(increaseProduct(cartItems, product))
    }
    const decreaseProducts =(product) => {
      setCartItems(decreaseProduct(cartItems, product))
    }

    const clearProducts =(product) => {
      setCartItems(clearProduct(cartItems, product))
    }
    const clearAllCart = () => setCartItems([])
    
    console.log(review)
    const value ={isCartOpen, setIsCartOpen, cartItems, addToMyCart, quantity, increaseProducts,decreaseProducts,clearProducts,totalprice, clearAllCart, newreiew,review}



  return <CartContexts.Provider value={value}>{children}</CartContexts.Provider>



}