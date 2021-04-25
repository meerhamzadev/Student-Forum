import { Button, IconButton } from '@material-ui/core'
import { AccountCircle, MenuRounded } from '@material-ui/icons'
import React from 'react'

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav className="navbar">
            <IconButton className="navbar__logo">LOGO</IconButton>

            <div className="navbar__buttons">
                <Button variant="extendedFab" className="navbar__buttons__button">Home</Button>
                <Button variant="extendedFab" className="navbar__buttons__button">Books</Button>
                <Button variant="extendedFab" className="navbar__buttons__button">Past Papers</Button>
                <Button variant="extendedFab" className="navbar__buttons__button">Exams</Button>
                <Button variant="extendedFab" className="navbar__buttons__button">Queries</Button>
                {
                    isLoggedIn ?

                        <>
                            <IconButton>
                                <MenuRounded className="navbar__buttons__menu" />
                            </IconButton>
                            <IconButton>
                                <AccountCircle className="navbar__buttons__account" />
                            </IconButton>
                        </>

                        :
                        <button className="navbar__buttons__loginButton" >Login</button>
                }
            </div>
        </nav>
    )
}

export default Navbar
