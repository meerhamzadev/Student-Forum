import {Button, IconButton} from '@material-ui/core';
import {AccountCircle, MenuRounded} from '@material-ui/icons';
import React from 'react';

const Navbar = ({ isLoggedIn }) => {
    const linkTo = (link) => {
        if (!window.location.href.includes(link)) {
            window.open(link, "_self");
        }
    }
    
    return (
        <nav className="navbar">
            <IconButton className="navbar__logo">LOGO</IconButton>

            <div className="navbar__buttons">
                {
                    isLoggedIn ? (
                        <>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn" onClick={() => linkTo("/home")}>Home</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn" onClick={() => linkTo("/books")}>Books</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn" onClick={() => linkTo("/pastpapers")}>Past Papers</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn" onClick={() => linkTo("/exams")}>Exams</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn" onClick={() => linkTo("/queries")}>Queries</Button>
                            
                            <IconButton>
                                <MenuRounded className="navbar__buttons__menu" />
                            </IconButton>
                            <IconButton>
                                <AccountCircle className="navbar__buttons__account" />
                            </IconButton>
                        </>
                    ) : (
                        <div className="navbar__buttons__notLogedIn">
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn" onClick={() => linkTo("/home")}>Home</Button>
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn" onClick={() => linkTo("/About")}>About Us</Button>
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn" onClick={() => linkTo("/Contact")}>Contact Us</Button>
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn" onClick={() => linkTo("/Services")}>Services</Button>
                            
                            <Button className="navbar__buttons__loginButton" onClick={() => linkTo("/login")}>Login</Button>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
