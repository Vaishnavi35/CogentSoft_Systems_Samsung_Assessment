import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';
import Layout from './Pages/Layout';
import { BrowserRouter } from 'react-router-dom';
import  RouteConfig  from './config/RouteConfig';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <RouteConfig />
    </BrowserRouter>
    </div>
  );
}

export default App;
