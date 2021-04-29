import {Button} from '@material-ui/core'
import React from 'react'

function LoginPage()
{
    return (
          <div className="login__page">

                    <form className="login__page__form">

                          <label>USERNAME:</label>
                          <input type="text"></input><br></br>
                          <label>PASSWORD:</label>
                          <input type="Password"></input><br></br>
                          <a href="#">Forget Password?</a>
                          <Button>Login</Button>

                    </form>

                
          </div>

    )
}

export default LoginPage