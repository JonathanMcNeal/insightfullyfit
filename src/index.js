import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Deficit from './Components/Deficit';
import Excess from './Components/Excess';

//import BMRCal from './Components/BMRCal';

//import TDEE from './Components/TDEE';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h2>Deficit Calculator</h2>
    <Deficit/>

    <br/>

    <h2>Excess Calculator</h2>
    <Excess/>


  </React.StrictMode>
);


