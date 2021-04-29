import React from 'react'
import {Button, IconButton} from '@material-ui/core'

function RegistrationPage()
{
    return (
         <div className="reg__page">

             <div className="reg__page__form">

                  <form>
                      <label>Username: </label>
                      <input type="text"></input><br></br>
                      <label>Email: </label>
                      <input type="text"></input><br></br>
                      <label>Password: </label>
                      <input type="password"></input><br></br>
                      <label>Confirm: </label>
                      <input type="password"></input><br></br>
                      <Button>Register</Button>
                  </form>

             </div>

             <div className="reg__page__prev">
                 <Button>Back</Button>
            </div>

         </div>
    )
}

export default RegistrationPage