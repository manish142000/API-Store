import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import reportWebVitals from './reportWebVitals';
import { 
BrowserRouter,
Routes,
Route 
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/" exact element={<Dashboard />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
