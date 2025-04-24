import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Check from './Components/check.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<App/>
  </StrictMode>
)
