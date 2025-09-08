import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
