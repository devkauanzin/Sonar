import { useEffect, useState } from 'react'
import { cliente } from '../config/cliente'
import { linkWhatsApp } from '../lib/links'
import { Icone } from './ui/Icone'

/** Atalho fixo para o WhatsApp, exibido depois que o visitante passa da primeira dobra. */
export function WhatsAppFlutuante() {
  const [visivel, setVisivel] = useState(false)
  const href = linkWhatsApp()

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.7)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  if (!href || !cliente.contato.whatsapp?.flutuante) return null
  return (
    <a
      className={`wa-flutuante${visivel ? ' wa-flutuante--visivel' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      tabIndex={visivel ? 0 : -1}
    >
      <Icone nome="whatsapp" tamanho={26} />
    </a>
  )
}
