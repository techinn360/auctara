import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/globals.css'
import App from './App.jsx'
import { DemoModalProvider } from './context/DemoModalContext.jsx'
import BookDemoModal from './components/BookDemoModal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DemoModalProvider>
        <App />
        <BookDemoModal />
      </DemoModalProvider>
    </BrowserRouter>
  </StrictMode>,
)
