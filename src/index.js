import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './website/Home/Home';
import Topbar from './website/Topbar/Topbar';
import About from './website/About/About';
import Contact from './website/Contact/Contact';

ReactDOM.render(
  <div id="main">
    <Topbar />
    <Home />
    <About />
    <Contact />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
