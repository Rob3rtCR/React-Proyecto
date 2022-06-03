/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEdk4NGYF8IyNSB35CUJgooy_RJc6-f5o",
  authDomain: "project-7785203938592870853.firebaseapp.com",
  projectId: "project-7785203938592870853",
  storageBucket: "project-7785203938592870853.appspot.com",
  messagingSenderId: "691277464018",
  appId: "1:691277464018:web:6b61d906de669a3fae880b"
};


const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
