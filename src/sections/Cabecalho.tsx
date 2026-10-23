import { useEffect, useState, type CSSProperties } from 'react'
import { cliente } from '../config/cliente'
import { Botao } from '../components/ui/Botao'
import { Icone } from '../components/ui/Icone'
import { Logo } from '../components/ui/Logo'
import { secaoVisivel } from '../lib/secoes'

export function Cabecalho() {
  const [rolou, setRolou] = useState(false)
  const [aberto, setAberto] = useState(false)
  const itens = cliente.navegacao.filter((n) => secaoVisivel(n.secao))

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('sem-rolagem', aberto)
    if (!aberto) return
    const aoTeclar = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  return (
    <header className={`cabecalho${rolou ? ' cabecalho--rolou' : ''}${aberto ? ' cabecalho--aberto' : ''}`}>
      <div className="cabecalho__conteudo container">
        <a href="#inicio" className="cabecalho__logo" onClick={() => setAberto(false)}>
          <Logo />
        </a>

        <nav id="menu-principal" className="cabecalho__nav" aria-label="Navegação principal">
          <ul>
            {itens.map((item, i) => (
              <li key={item.secao} style={{ '--i': i } as CSSProperties}>
                <a href={`#${item.secao}`} onClick={() => setAberto(false)}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <div className="cabecalho__nav-rodape">
            <Botao botao={{ rotulo: 'Agendar pelo WhatsApp', destino: 'whatsapp' }} />
            {cliente.contato.telefones.map((t) => (
              <a key={t.tel} href={`tel:${t.tel}`} className="cabecalho__tel">
                <span>{t.rotulo}</span> {t.numero}
              </a>
            ))}
          </div>
        </nav>

        <Botao className="cabecalho__cta" botao={{ rotulo: 'Agendar', destino: 'whatsapp' }} variante="escuro" />

        <button
          type="button"
          className="cabecalho__menu"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((a) => !a)}
        >
          <Icone nome={aberto ? 'fechar' : 'menu'} tamanho={26} />
        </button>
      </div>
    </header>
  )
}
