import React from 'react'
import Navbar from '../NavBar/Navbar'
import ReactSelect from './ReactSelect'
import CustomizedTables from './table'

function TimetablePage() {

    return (
        <div className="timetable__page">
            <Navbar isLoggedIn={true} />
            <div className="timetable__page__options">
                <ReactSelect />
            </div>

            <div className="timetable__page__display">
                <CustomizedTables />
            </div>
        </div>
    )
}

export default TimetablePage
