import React, { createContext, useState } from 'react'

export const TimeTableContext = createContext("");


export const ContextWrapper = ({ children }) => {
    const [timeTableData, setTimeTableData] = useState([])
    return (
        <TimeTableContext.Provider value={[timeTableData, setTimeTableData]}>
            {children}
        </TimeTableContext.Provider>
    )
}