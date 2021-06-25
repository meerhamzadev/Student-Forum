import React from 'react';
import Navbar from '../NavBar/Navbar';

function PastPapers() {
    return (
        <section className="pastPapers">
            <Navbar isLoggedIn />
            
            <div className="pastPapers__container">
                <div className="pastPapers__container__query"></div>
                <div className="pastPapers__container__papers"></div>
            </div>
        </section>
    )
}

export default PastPapers
