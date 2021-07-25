import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PastPaperContextWrapper } from './Components/PastPapersPage/PastPaperContext';

ReactDOM.render(
  <React.StrictMode>
    <PastPaperContextWrapper>
      <App />
    </PastPaperContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

