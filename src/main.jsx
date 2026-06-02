import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'

const path = window.location.pathname || '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/about-page' || path === '/about' ? <AboutPage /> : <App />}
  </StrictMode>,
)
