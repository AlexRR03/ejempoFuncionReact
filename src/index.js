import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros';
import PadreMatematicas from './components/PadreMatematicas';
import SaludoPadre from './components/SaludoPadre';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car marca="Honda" modelo="civic" aceleracion="20" velocidadmax="220"></Car>
    <Car marca="Citroen" modelo="Xsara" aceleracion="50" velocidadmax="320" ></Car>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
