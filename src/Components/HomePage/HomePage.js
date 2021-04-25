import React from 'react'
import Dashboard from './ChildComponents/DashBoard/Dashboard';
import Recents from './ChildComponents/Recents/Recents';
import Navbar from '../NavBar/Navbar';

function HomePage() {
    return (
        <div className="home">
            <Navbar />

            <div className="home__page">
                <Recents />
                <Dashboard />
            </div>
        </div>
    )
}

export default HomePage
