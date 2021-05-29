import React from 'react'
import { Button } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

function LoginPage() {
      return (
            <div className="login__page">
                  <AccountCircle className="login__page__avatar" />
                  <form className="login__page__form">
                        <input type="text" className="login__page__form__input" placeholder="Enter the Email " />
                        <input type="Password" className="login__page__form__input" placeholder="Enter the Password" />
                        <Button className="login__page__form__button" >Login</Button>
                  </form>


            </div>

      )
}

export default LoginPage