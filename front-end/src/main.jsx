import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { themes } from './utilities/styles.theme'
import { LocationProvider } from './context/LocationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocationProvider>
      <ThemeProvider theme={themes}>
        <App />
      </ThemeProvider>
    </LocationProvider>

  </React.StrictMode>
)
