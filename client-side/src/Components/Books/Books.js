import React from 'react';
import Navbar from '../NavBar/Navbar';
import ReactSelect from './ReactSelect';

function Books() {
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
                            <a href={bookItem.book_image} target="_blank" rel="noopener noreferrer" className="books__container__books__book">
                                <h2>{bookItem.book_subject}</h2>
                                <h4>{`Year: ${bookItem.book_year}`}</h4>
                                <a href={bookItem.book_image} target="_blank" rel="noopener noreferrer">View</a>
                            </a>
                        )))
                    }
                </div>
            </div>
        </section>
    )
}

export default Books
