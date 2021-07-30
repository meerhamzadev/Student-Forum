import { Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function DeleteUser() {
    const goBack = () => {
        window.history.back();
    }

    const deleteUser = async (e) => {
        e.preventDefault();

        const { email, password } = e.target;

        const Data = {
            email: email.value,
            user_password: password.value,
        }

        try {
            const response = await axios.post('http://localhost:5000/deleteUser', Data);
            console.log(response);
            if (response.status === 200) {
                document.querySelector('.login__page__homePageLink').click();
                window.alert("User Deleted")
            }
        }
        catch (err) {
            window.alert("Error: Server Error")
        }

    }

    return (
        <div className="login">
            <div className="login__page">
                <AccountCircle className="login__page__avatar" />
                <form onSubmit={deleteUser} className="login__page__form">
                    <input name="email" type="text" className="login__page__form__input" placeholder="Enter the Email " />
                    <input name="password" type="Password" className="login__page__form__input" placeholder="Enter the Password" />
                    <div className="login__page__form__buttons">
                        <Button className="login__page__form__buttons__button" onClick={goBack} >Back</Button>
                        <Button type="submit" className="login__page__form__buttons__button" >Delete</Button>
                    </div>

                </form>
                <Link to="/" className="login__page__homePageLink"> </Link>
            </div>
        </div>
    )
}

export default DeleteUser