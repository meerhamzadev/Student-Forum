import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

function Recents() {
    const linkTo = (link) => {
        if (!window.location.href.includes(link)) {
            window.open(link, "_self");
        }
    }
    return (
        <div className="recents">
            <h1 className="recents__heading">Actions</h1>

            <div className="recents__items">
                <Button variant="extendedFab" className="recents__items__item" onClick={() => document.querySelector('.questionLink').click()} >Ask A Question</Button>
                <Button variant="extendedFab" className="recents__items__item" onClick={() => linkTo("/changePassword")} >Update Password</Button>
                <Button variant="extendedFab" className="recents__items__item" onClick={() => linkTo("/deleteUser")}>Delete Account</Button>
                <Button variant="extendedFab" className="recents__items__item" onClick={() => document.querySelector('.mainpageLink').click()}>Logout</Button>
                <Link to="/questions" className="questionLink" ></Link>
                <Link to="/" className="mainpageLink"></Link>
            </div>
        </div>
    )
}

export default Recents
