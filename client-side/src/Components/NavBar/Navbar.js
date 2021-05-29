import {Button, IconButton} from '@material-ui/core'
import {AccountCircle, MenuRounded} from '@material-ui/icons'
import React from 'react'

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav className="navbar">
            <IconButton className="navbar__logo">LOGO</IconButton>

            <div className="navbar__buttons">
                {
                    isLoggedIn ? (
                        <>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn">Home</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn">Books</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn">Past Papers</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn">Exams</Button>
                            <Button variant="extendedFab" className="navbar__buttons__logedIn">Queries</Button>
                            
                            <IconButton>
                                <MenuRounded className="navbar__buttons__menu" />
                            </IconButton>
                            <IconButton>
                                <AccountCircle className="navbar__buttons__account" />
                            </IconButton>
                        </>
                    ) : (
                        <div className="navbar__buttons__notLogedIn">
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn">Home</Button>
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn">About Us</Button>
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn">Contact Us</Button>
                            <Button variant="extendedFab" className="navbar__buttons__notLogedIn">Services</Button>
                            
                            <Button className="navbar__buttons__loginButton" >Login</Button>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
