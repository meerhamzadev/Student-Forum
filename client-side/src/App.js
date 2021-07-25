import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import PastPapers from './Components/PastPapersPage/PastPapers';
import Questions from './Components/Questions/Questions';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import { ContextWrapper } from './Components/TimeTable/TimeTableContext'
import TimeTable from './Components/TimeTable/TimetablePage';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import { PastPaperContextWrapper } from './Components/PastPapersPage/PastPaperContext';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WelcomePage} exact />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <PastPaperContextWrapper>
          <Route path="/pastpapers" component={PastPapers} />
        </PastPaperContextWrapper>
        <ContextWrapper>
          <Route path="/timetable" component={TimeTable} />
        </ContextWrapper>
        <Route path="/questions" component={Questions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
