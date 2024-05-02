import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingScreen from "../src/screen/LandingScreen.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingScreen/>
  </React.StrictMode>,
)
