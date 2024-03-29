import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CurrencyConvertor from './CurrencyConvertor';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <CurrencyConvertor /> */}
    {/* <StarRating maxRating = {5} />
    <StarRating maxRating = {5} color='red' size={20} />
    <StarRating maxRating = {5} color='green' size={25} className={"test"} />
     */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
