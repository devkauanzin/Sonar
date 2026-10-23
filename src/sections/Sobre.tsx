import { cliente } from '../config/cliente'
import { Midia } from '../components/ui/Midia'
import { Motivo } from '../components/ui/Motivo'
import { Sobretitulo } from '../components/ui/Sobretitulo'
import { comEnfase } from '../lib/texto'

export function Sobre() {
  const s = cliente.sobre
  return (
    <section id="sobre" className={`secao sobre sobre--${s.layout}`}>
      <div className="container sobre__grade">
        <div className="sobre__imagens" data-revelar>
          <div className="sobre__foto">
            <Midia imagem={s.imagem} />
          </div>
          {s.imagemSecundaria && (
            <div className="sobre__foto-menor">
              <Midia imagem={s.imagemSecundaria} className="midia--escura" />
            </div>
          )}
          <Motivo className="sobre__motivo" x={100} y={100} tamanho={300} aneis={5} />
        </div>

        <div className="sobre__texto" data-revelar>
          <Sobretitulo>{s.sobretitulo}</Sobretitulo>
          <h2 className="titulo-secao">{comEnfase(s.titulo)}</h2>
          <p className="sobre__nome">{s.nome}</p>
          {s.paragrafos.map((p) => (
            <p key={p.slice(0, 24)} className="sobre__paragrafo">
              {p}
            </p>
          ))}
          {s.credenciais.length > 0 && (
            <ul className="sobre__credenciais">
              {s.credenciais.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          )}
          {s.citacao && (
            <blockquote className="sobre__citacao">
              <p>{s.citacao}</p>
            </blockquote>
          )}
        </div>
      </div>
    </section>
  )
}
