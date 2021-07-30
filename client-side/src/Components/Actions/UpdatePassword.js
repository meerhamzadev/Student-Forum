import { Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function UpdatePassword() {
    const goBack = () => {
        window.history.back();
    }

    const updatePassword = async (e) => {
        e.preventDefault();

        const { email, password, confirmPassword } = e.target;

        const Data = {
            email: email.value,
            user_password: password.value,
            confirmPassword: confirmPassword.value
        }

        try {
            const response = await axios.post('http://localhost:5000/changePassword', Data);

            if (response.status === 200) {
                document.querySelector('.login__page__homePageLink').click();
                window.alert("Password Updated Successfully")
            }
        }

        catch (err) {
            if (err.message.indexOf('403') !== -1) {
                window.alert("Entered passwords are not matched")
            }
            else {
                window.alert("Error 500: Internal Server Error")
            }
        }

    }

    return (
        <div className="login">
            <div className="login__page">
                <AccountCircle className="login__page__avatar" />
                <form onSubmit={updatePassword} className="login__page__form">
                    <input name="email" type="text" className="login__page__form__input" placeholder="Enter the Email " />
                    <input name="password" type="Password" className="login__page__form__input" placeholder="Enter the New Password" />
                    <input name="confirmPassword" type="Password" className="login__page__form__input" placeholder="Confirm the Password" />
                    <div className="login__page__form__buttons">
                        <Button className="login__page__form__buttons__button" onClick={goBack} >Back</Button>
                        <Button type="submit" className="login__page__form__buttons__button" >Update</Button>
                    </div>

                </form>
                <Link to="/home" className="login__page__homePageLink"> </Link>
            </div>
        </div>
    )
}

export default UpdatePassword