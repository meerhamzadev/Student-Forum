import React, { createContext, useState } from 'react'

export const PastPaperContext = createContext("");


export const PastPaperContextWrapper = ({ children }) => {
    const [pastPaperData, setPastPaperData] = useState([])
    return (
        <PastPaperContext.Provider value={[pastPaperData, setPastPaperData]}>
            {children}
        </PastPaperContext.Provider>
    )
}