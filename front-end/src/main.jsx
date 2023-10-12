import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { themes } from './utilities/styles.theme'
import { LocationProvider } from './context/LocationContext'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LocationProvider>
          <ThemeProvider theme={themes}>
            <App />
          </ThemeProvider>
        </LocationProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
