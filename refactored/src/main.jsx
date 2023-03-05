import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './components/Global/style'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
