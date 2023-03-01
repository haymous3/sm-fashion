import { createContext, useState } from "react";


export const OpenReview = createContext({
    openReview: false,
    setOpenReview: () => {}
})



export const OpenReviewProvider = ({children}) => {
    const [openReview, setOpenReview] = useState(false)


    const value = {openReview, setOpenReview} 


    return <OpenReview.Provider value={value}>{children}</OpenReview.Provider>
}