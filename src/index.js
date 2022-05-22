import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/home';
import Apps from './pages/apps';
import Company from './pages/company';
import './fonts/Inter/Inter-VariableFont_slnt,wght.ttf'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, // as rotas da aplicação
  Routes, // indica quais as entradas possiveis
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aplicativos" element={<Apps />} />
      <Route exact path="/empresa" element={<Company />} />
      <Route exact path="/contato" element={<></>} />
      <Route exact path="/teste-de-velocidade" element={<></>} />
      <Route exact path="/faq" element={<></>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
