import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='flex flex-col gap-4 items-center justify-center min-h-screen font-sans'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
