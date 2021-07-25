import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { AccountCircle, MenuRounded } from '@material-ui/icons';

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
                            <Button variant="extendedFab" className="navbar__buttons__logedIn" onClick={() => linkTo("/timetable")}>Time Table</Button>

                            <IconButton>
                                <MenuRounded className="navbar__buttons__menu" />
                            </IconButton>
                            <IconButton>
                                <AccountCircle className="navbar__buttons__account" />
                            </IconButton>
                        </>
                    ) : (
                        <div className="navbar__buttons__notLogedIn">

                            <Button className="navbar__buttons__loginButton" onClick={() => linkTo("/login")}>Login</Button>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
