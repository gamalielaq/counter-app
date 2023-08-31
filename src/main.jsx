import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp title="Hola Soy goku" subTitle={ 123 } /> */}
    {/* <FirstApp /> */}
    < CounterApp value = { 20 }/>
  </React.StrictMode>,
)
