import { Button } from '@material-ui/core'
import React from 'react'

function Dashboard() {
    return (
        <div className="dashboard">
            <p className="dashboard__welcome">Welcome to Student Forum</p>

            <div className="dashboard__shortcuts">
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
                <Button variant="extendedFab" className="dashboard__shortcuts__button">Lorem Ipsum</Button>
            </div>
        </div>
    )
}

export default Dashboard
