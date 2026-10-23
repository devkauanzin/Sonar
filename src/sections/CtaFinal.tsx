import type { CSSProperties } from 'react'
import { cliente } from '../config/cliente'
import { Botao } from '../components/ui/Botao'
import { comEnfase } from '../lib/texto'

export function CtaFinal() {
  const c = cliente.ctaFinal
  return (
    <section className="cta" aria-labelledby="cta-titulo">
      <div className="cta__ondas" aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} style={{ '--n': i } as CSSProperties} />
        ))}
      </div>
      <div className="container cta__conteudo" data-revelar>
        <h2 id="cta-titulo" className="cta__titulo">
          {comEnfase(c.titulo)}
        </h2>
        <div className="cta__lado">
          <p className="cta__texto">{c.texto}</p>
          <div className="cta__acoes">
            <Botao botao={c.botao} variante="escuro" />
            {c.botaoSecundario && <Botao botao={c.botaoSecundario} variante="contorno" />}
          </div>
        </div>
      </div>
    </section>
  )
}
