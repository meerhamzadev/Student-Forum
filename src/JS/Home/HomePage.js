import React from 'react'
import Navbar from '../General/Navbar'
import Dashboard from './Dashboard'
import Recents from './Recents'

function HomePage() {
    return (
        <div className="home">
            <Navbar className="home__navbar" />
            
            <div className="home__page">
                <Recents className="home__page__recents" />
                <Dashboard className="home__page__dashboard" />
            </div>
        </div>
    )
}

export default HomePage
