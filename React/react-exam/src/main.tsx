import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CardProvider } from './contexts/CardContext.tsx'
import { UserProvider } from './contexts/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CardProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CardProvider>
  </BrowserRouter>
)
