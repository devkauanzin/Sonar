import type { CSSProperties } from 'react'
import { cliente } from '../config/cliente'
import { Botao } from '../components/ui/Botao'
import { Sobretitulo } from '../components/ui/Sobretitulo'
import { comEnfase } from '../lib/texto'

export function ComoFunciona() {
  const c = cliente.comoFunciona
  const etapas = c.etapas.slice(0, 4)
  return (
    <section id="comoFunciona" className="secao etapas">
      <div className="container">
        <header className="etapas__cabeca" data-revelar>
          <div>
            <Sobretitulo>{c.sobretitulo}</Sobretitulo>
            <h2 className="titulo-secao">{comEnfase(c.titulo)}</h2>
          </div>
          {c.botao && <Botao botao={c.botao} variante="contorno" />}
        </header>
        <ol className="etapas__lista" style={{ '--qtd': etapas.length } as CSSProperties}>
          {etapas.map((e, i) => (
            <li key={e.titulo} className="etapa" data-revelar style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="etapa__marcador" aria-hidden="true">
                <span>{i + 1}</span>
              </span>
              <h3 className="etapa__titulo">{e.titulo}</h3>
              <p className="etapa__descricao">{e.descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
