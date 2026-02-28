import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-100"/>
  </StrictMode>,
)
