import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
Provider

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
)
