import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Deficit from './Components/Deficit';

import BMRCal from './Components/BMRCal';

//import TDEE from './Components/TDEE';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
    <Deficit/>

    <BMRCal/>



  </React.StrictMode>
);


