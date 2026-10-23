import type { CSSProperties } from 'react'
import { cliente } from '../config/cliente'
import { Botao } from '../components/ui/Botao'
import { Midia } from '../components/ui/Midia'
import { Motivo } from '../components/ui/Motivo'
import { Sobretitulo } from '../components/ui/Sobretitulo'
import { setor } from '../lib/leque'
import { comEnfase } from '../lib/texto'

const leque = setor()

export function Hero() {
  const h = cliente.hero
  const [colTexto, colImagem] = h.proporcao
  const estilo = { '--col-texto': `${colTexto}fr`, '--col-imagem': `${colImagem}fr` } as CSSProperties
  const sobretitulo = [h.sobretitulo, cliente.empresa.cidade].filter(Boolean).join(' — ')

  return (
    <section id="inicio" className={`hero hero--${h.layout}`} style={estilo}>
      <Motivo className="hero__motivo" x={78} y={18} tamanho={760} aneis={9} />
      <div className="hero__grade container">
        <div className="hero__texto">
          <Sobretitulo>{sobretitulo}</Sobretitulo>
          <h1 className="hero__titulo">{comEnfase(h.titulo)}</h1>
          <p className="hero__subtitulo">{h.subtitulo}</p>
          <div className="hero__acoes">
            <Botao botao={h.botaoPrincipal} />
            {h.botaoSecundario && <Botao botao={h.botaoSecundario} variante="contorno" />}
          </div>
          {h.destaques.length > 0 && (
            <ul className="hero__destaques">
              {h.destaques.slice(0, 3).map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </div>

        {(h.imagem.src || h.layout !== 'centro') && (
          <figure className="hero__visual">
            {h.layout === 'leque' ? (
              <div className="hero__leque-area">
                <div className="hero__leque" style={{ clipPath: leque.clipPath, aspectRatio: String(leque.proporcao) }}>
                  <Midia imagem={h.imagem} prioridade className="midia--escura" />
                </div>
                <div className="hero__escala" aria-hidden="true">
                  {Array.from({ length: 11 }, (_, i) => (
                    <span key={i} className={i % 5 === 0 ? 'maior' : ''} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="hero__recorte">
                <Midia imagem={h.imagem} prioridade />
              </div>
            )}
            {h.etiqueta && <figcaption className="hero__etiqueta">{h.etiqueta}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  )
}
