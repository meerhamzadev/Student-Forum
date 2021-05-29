import React from 'react'
import { Button } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

function RegistrationPage() {
    return (
        <div className="reg__page">
            <AccountCircle className="reg__page__avatar" />
            <form className="reg__page__form">
                <input className="reg__page__form__input" type="text" placeholder="Enter the Name" />
                <input className="reg__page__form__input" type="text" placeholder="Enter the Email" />
                <input className="reg__page__form__input" type="password" placeholder="Type the Password" />
                <input className="reg__page__form__input" type="password" placeholder="Retype Password to Confirm" />

                <div className="reg__page__form__buttons">
                    <Button className="reg__page__form__buttons__button" >Back</Button>
                    <Button className="reg__page__form__buttons__button" >Register</Button>

                </div>
            </form>
        </div>
    )
}

export default RegistrationPage