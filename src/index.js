import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import DrugApp from './Drugfinder';
import Homepage from './Homepage';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
//document.addEventListener('DOMContentLoaded', function(event) {
  //root =   document.getElementById('root').textContent;
      //  root = ReactDOM.createRoot(document.getElementById('root'));
//});
 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
