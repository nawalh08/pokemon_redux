import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import router from './app-rooting.jsx'
import { RouterProvider } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
    <RouterProvider router={router} />  
    </Provider>
  </React.StrictMode>,
)
