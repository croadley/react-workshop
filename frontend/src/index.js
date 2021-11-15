import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//CSSReset includes a global styled component that adds page-level styles to establish a common baseline
import CSSReset from '@tds/core-css-reset';

ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
