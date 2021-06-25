import {Button} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';

function RegistrationPage() {
    const goBack = () => {
        window.history.back();
    }
    
    const registerUser = async (e) => {
        e.preventDefault();
        
        let { user_name, email, user_password } = e.target;
        
        let user = {
            name: user_name.value,
            email: email.value,
            user_password: user_password.value
        }
        
        try {
            const response = await axios.post('http://localhost:5000/register', user)
            
            if (response.status === 200) {
                window.alert('User added Successfully');
                document.querySelector('.reg__page__form__loginNavigator').click();
            }
        }
        catch (err) {
            if (err.message.indexOf('422') !== -1) {
                window.alert('Invalid Input')
            }
        }

    }
    return (
        <div className="reg">
            <div className="reg__page">
                <AccountCircle className="reg__page__avatar" />
                <form onSubmit={registerUser} className="reg__page__form">
                    <input name="user_name" className="reg__page__form__input" type="text" placeholder="Enter the Name" />
                    <input name="email" className="reg__page__form__input" type="text" placeholder="Enter the Email" />
                    <input name="user_password" className="reg__page__form__input" type="password" placeholder="Type the Password" />
                    <input name="confirm_password" className="reg__page__form__input" type="password" placeholder="Retype Password to Confirm" />

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