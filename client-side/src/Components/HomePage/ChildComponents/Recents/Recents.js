import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

function Recents() {
    return (
        <div className="recents">
            <h1 className="recents__heading">Recents</h1>

            <div className="recents__items">
                <Button variant="extendedFab" className="recents__items__item" onClick={() => document.querySelector('.questionLink').click()} >Ask A Question</Button>
                <Button variant="extendedFab" className="recents__items__item" onClick={() => document.querySelector('.questionLink').click()} >Give Answer</Button>
                <Button variant="extendedFab" className="recents__items__item">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="recents__items__item">Lorem Ipsum</Button>
                <Link to="/questions" className="questionLink" ></Link>
            </div>
        </div>
    )
}

export default Recents
