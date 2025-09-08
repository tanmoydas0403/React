import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css'; // or './App.css'
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));

let myObj = {
  username: "Tanmoy",
  age: 27
};

let newArr = [1, 2, 3];

root.render(
  <>
    <Card username="ChaiAurCode" />
    <Card username="Delva" />
  </>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
