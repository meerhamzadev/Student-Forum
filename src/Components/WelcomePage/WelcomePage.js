import {Button} from '@material-ui/core'
import React from 'react'
import Navbar from '../NavBar/Navbar'
import SocialMedia from '../SocialMedia/SocialMedia'

const Welcome = () => (
    <div className="WelcomePage">
        <Navbar isLoggedIn={false} />
        <div className="WelcomePage__Body">
            <h1 className="WelcomePage__Body__Title">
                <span>Student</span>
                <span>Forum</span>
            </h1>
            <div className="WelcomePage__Body__Description">
                <p className="WelcomePage__Body__Description__Text">
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Inventore veniam quibusdam
                    sunt adipisci deserunt totam aliquid sit saepe, impedit.
                </p>
                
                <Button className="WelcomePage__Body__Description__Button">
                    Learn More
                </Button>
            </div>
            <SocialMedia />
        </div>
    </div>

)

export default Welcome
