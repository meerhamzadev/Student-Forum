import React, { useContext } from 'react';
import Navbar from '../NavBar/Navbar';
import ReactSelect from './ReactSelect';
import { BooksContext } from './BooksContext';
function Books() {
    const [booksData, setBooksData] = useContext(BooksContext)
    return (
        <section className="books">
            <Navbar isLoggedIn />

            <div className="books__container">
                <div className="books__container__query">
                    <ReactSelect />
                </div>
                <div className="books__container__books">
                    {
                        React.Children.toArray(booksData.map(bookItem => (
                            <a href={bookItem.book_file} target="_blank" rel="noopener noreferrer" className="books__container__books__book">
                                <h2>{bookItem.book_name}</h2>
                                <h4>{`Author: ${bookItem.book_author}`}</h4>
                                <a href={bookItem.book_file} target="_blank" rel="noopener noreferrer">Read</a>
                            </a>
                        )))
                    }
                </div>
            </div>
        </section>
    )
}

export default Books
