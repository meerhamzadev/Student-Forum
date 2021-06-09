import { Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
function LoginPage() {
      const goBack = () => {
            window.history.back();
      }

      const loggedIn = async (e) => {
            e.preventDefault();
            const { email, password } = e.target;

            const Data = {
                  email: email.value,
                  password: password.value
            }
            try {

                  const response = await axios.post('http://localhost:5000/login', Data);
                  console.log(response);
                  if (response.status === 200) {
                        const switchLink = document.querySelector('.login__page__homePageLink');
                        switchLink.click();
                  }
            }
            catch (err) {
                  if (err.message.indexOf('404') !== -1) {
                        window.alert('Error 404: User not exist\nRegister first to Login')
                  }
                  else {
                        window.alert('Error 500: Server error')
                  }
            }

      }
      return (
            <div className="login">
                  <div className="login__page">
                        <AccountCircle className="login__page__avatar" />
                        <form onSubmit={loggedIn} className="login__page__form">
                              <input name="email" type="text" className="login__page__form__input" placeholder="Enter the Email " />
                              <input name="password" type="Password" className="login__page__form__input" placeholder="Enter the Password" />
                              <div className="login__page__form__buttons">
                                    <Button className="login__page__form__buttons__button" onClick={goBack} >Back</Button>
                                    <Button type="submit" className="login__page__form__buttons__button" >Login</Button>
                              </div>
                              <div className="login__page__form__registerQuery">
                                    <p>Don't have an account? <a href="/register">Create Account</a></p>
                              </div>
                        </form>
                        <Link to="/home" className="login__page__homePageLink"> </Link>
                  </div>
            </div>
      )
}

export default LoginPage