import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './config/fontes'
import './styles/base.css'
import './styles/secoes.css'
import { cliente } from './config/cliente'
import { aplicarTema } from './lib/tema'
import { App } from './App'

aplicarTema(cliente.tema)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
