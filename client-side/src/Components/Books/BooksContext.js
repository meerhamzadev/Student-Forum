import React, {createContext, useState} from 'react';

export const BooksContext = createContext("");


export const BooksContextWrapper = ({ children }) => {
    const [booksData, setBooksData] = useState([])
    return (
        <BooksContext.Provider value={[booksData, setBooksData]}>
            {children}
        </BooksContext.Provider>
    )
}