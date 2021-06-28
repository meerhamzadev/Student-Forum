import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import PastPapers from './Components/PastPapersPage/PastPapers';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import TimeTable from './Components/TimeTable/TimeTable';
import WelcomePage from './Components/WelcomePage/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WelcomePage} exact />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/pastpapers" component={PastPapers} />
        <Route path="/timetable" component={TimeTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
