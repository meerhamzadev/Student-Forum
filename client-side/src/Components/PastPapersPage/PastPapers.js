import React, { useContext } from 'react';
import Navbar from '../NavBar/Navbar';
import { PastPaperContext } from './PastPaperContext';
import ReactSelect from './ReactSelect'

function PastPapers() {
    const [pastPaperData, setPastPaperData] = useContext(PastPaperContext);
    return (
        <section className="pastPapers">
            <Navbar isLoggedIn />

            <div className="pastPapers__container">
                <div className="pastPapers__container__query">
                    <ReactSelect />
                </div>
                <div className="pastPapers__container__papers">
                    {
                        React.Children.toArray(pastPaperData.map(paperItem => (
                            <a href={paperItem.paper_image} target="_blank" rel="noopener noreferrer" className="pastPapers__container__papers__paper">
                                <h2>{paperItem.paper_subject}</h2>
                                <h4>{`Year: ${paperItem.paper_year}`}</h4>
                                <a href={paperItem.paper_image} target="_blank" rel="noopener noreferrer">View</a>
                            </a>
                        )))
                    }
                </div>
            </div>
        </section>
    )
}

export default PastPapers
