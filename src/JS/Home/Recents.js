import {Button} from '@material-ui/core';
import React from 'react';

function Recents() {
    return (
        <div className="recents">
            <h1 className="recents__heading">Recents</h1>
            
            <div className="recents__items">
                <Button variant="extendedFab" className="recents__items__item">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="recents__items__item">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="recents__items__item">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="recents__items__item">Lorem Ipsum</Button>
            </div>
        </div>
    )
}

export default Recents
