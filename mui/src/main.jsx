import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Useautho from './StudenManegmentSyterm/pages/Useautho.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Useautho>
      <App/>
    </Useautho>
  </StrictMode>,
)
