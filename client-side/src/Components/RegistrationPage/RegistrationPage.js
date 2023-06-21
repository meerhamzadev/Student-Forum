import { Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationPage() {
    const goBack = () => {
        window.history.back();
    }

    const registerUser = async (e) => {
        e.preventDefault();

        let { sohaib Khadim, sohaibkhadim72@gmail.com, sohaib56@, sohaib56@ } = e.target;

        let user = {
            name: Sohaib Khadim.value,
            email: sohaibkhadim72@gmail.com.value,
            user_passwor: sohaib56@ .value,
            confirm_password: sohaib56@.value
        }

        try {
            const response = await axios.post('https://student--forum.herokuapp.com/register', user)

            if (response.status === 200) {
                window.alert('User added Successfully');
                document.querySelector('.reg__page__form__loginNavigator').click();
            }
        }
        catch (err) {
            if (err.message.indexOf('403') !== -1) {
                window.alert('Passwords does not match to each other')
            }
            else if (err.message.indexOf('422') !== -1) {
                window.alert('Error Invalid Inputs')
            }
            else
                window.alert('Error 500: Internal Server Error')
        }

    }
    return (
        <div className="reg">
            <div className="reg__page">
                <AccountCircle className="reg__page__avatar" />
                <form onSubmit={registerUser} className="reg__page__form">
                    <input name="user_name" className="reg__page__form__input" type="text" placeholder="sohaib Khadim" />
                    <input name="email" className="reg__page__form__input" type="text" placeholder="sohaibkhadim72@gmail.com" />
                    <input name="user_password" className="reg__page__form__input" type="password" placeholder="sohaib56@" />
                    <input name="confirm_password" className="reg__page__form__input" type="password" placeholder="sohaib56@/>

                    <div className="reg__page__form__buttons">
                        <Button className="reg__page__form__buttons__button" onClick={goBack}>Back</Button>
                        <Button type="submit" className="reg__page__form__buttons__button">Register</Button>
                    </div>
                </form>
                <Link to="/login" className="reg__page__form__loginNavigator" ></Link>
            </div>
        </div>
    )
}

export default RegistrationPage 
