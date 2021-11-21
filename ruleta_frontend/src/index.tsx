import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import JugadorList from './components/Jugadores/JugadorList';
import JugadorForm from './components/Jugadores/JugadorForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div className="container p-4">
          <Routes>
            <Route path='/' element={<JugadorList/>}/>
            <Route path='/new-jugador' element={<JugadorForm/>}/>
            <Route path='/update/:id' element={<JugadorForm/>}/>
          </Routes>     
        </div> 
    </BrowserRouter>   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
