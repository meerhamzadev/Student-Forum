import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';

function App() {
  return (
    <>
      <RegistrationPage />
      {/* <WelcomePage /> */}
      <HomePage />
    </>
  );
}

export default App;
