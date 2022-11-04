import { createContext, useState } from "react";



export const SearchValue = createContext({
   searchValue: '',
   searchResult: () => {} 
})


export const SearchValueProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('')

    const searchResult = (e) => {
        e.preventDefault()
        const {value} = e.target

        setSearchValue(value)
    }



    const value = {searchValue, searchResult}



    return <SearchValue.Provider value={value}>{children}</SearchValue.Provider>
}