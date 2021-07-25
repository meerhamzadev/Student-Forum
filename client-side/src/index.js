import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PastPaperContextWrapper } from './Components/PastPapersPage/PastPaperContext';
import { BooksContextWrapper } from './Components/Books/BooksContext';
ReactDOM.render(
  <React.StrictMode>
    <PastPaperContextWrapper>
      <BooksContextWrapper>
        <App />
      </BooksContextWrapper>
    </PastPaperContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

