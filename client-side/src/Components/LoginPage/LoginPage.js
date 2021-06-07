import {Button} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import React from 'react';

function LoginPage() {
      const goBack = () => {
            window.history.back();
      }
      
      return (
            <div className="login">
                  <div className="login__page">
                        <AccountCircle className="login__page__avatar" />
                        <form className="login__page__form">
                              <input type="text" className="login__page__form__input" placeholder="Enter the Email " />
                              <input type="Password" className="login__page__form__input" placeholder="Enter the Password" />
                              <div className="login__page__form__buttons">
                                    <Button className="login__page__form__buttons__button" onClick={goBack} >Back</Button>
                                    <Button className="login__page__form__buttons__button" >Login</Button>
                              </div>
                              <div className="login__page__form__registerQuery">
                                    <p>Don't have an account? <a href="/register">Create Account</a></p>
                              </div>
                        </form>
                  </div>
            </div>
      )
}

export default LoginPage