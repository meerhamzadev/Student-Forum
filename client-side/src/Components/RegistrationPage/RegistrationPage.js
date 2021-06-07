import {Button} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import React from 'react';

function RegistrationPage() {
    const goBack = () => {
        window.history.back();
    }
    
    return (
        <div className="reg">
            <div className="reg__page">
                <AccountCircle className="reg__page__avatar" />
                <form className="reg__page__form">
                    <input className="reg__page__form__input" type="text" placeholder="Enter the Name" />
                    <input className="reg__page__form__input" type="text" placeholder="Enter the Email" />
                    <input className="reg__page__form__input" type="password" placeholder="Type the Password" />
                    <input className="reg__page__form__input" type="password" placeholder="Retype Password to Confirm" />

                    <div className="reg__page__form__buttons">
                        <Button className="reg__page__form__buttons__button" onClick={goBack}>Back</Button>
                        <Button className="reg__page__form__buttons__button">Register</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage