import {  createContext, useState, useEffect } from "react";


const compareHelper = (comparelist, product) => {
    const existingcompare = comparelist.find((item) => item.id === product.id)

    if(existingcompare){
        return comparelist.map((item) => {
            if(item.id === product.id){
                alert('Item already exist')
              return  {...item}
            }else{
                
               return item
            }
        })
        
         
       
    }
    alert('Added to your compare list')
    return [...comparelist, {...product, compareQuantity: 1}]
}

export const CompareContext = createContext({
    compareList: [],
    compareQuantity: 0,
    setCompareQuantity: () => {},
    addCompareList: () => {},
    clearCompareList: () => {}

})


export const CompareProvider = ({children}) => {
    const [compareList, setCompareList] = useState([])
    const [compareQuantity, setCompareQuantity] = useState(0)

    useEffect(() => {
        const compare = compareList.reduce((start, finish) => {
            return start + finish.compareQuantity

        }, 0)

        setCompareQuantity(compare)
    }, [compareList])    

    const addCompareList = (product) => {
        setCompareList(compareHelper(compareList, product))
    }

    const clearCompareList = () => {
        setCompareList([])
    }

    console.log(compareList)
    // console.log(compareQuantity) 

    const value = {compareList, addCompareList, clearCompareList, compareQuantity}




    return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>

}