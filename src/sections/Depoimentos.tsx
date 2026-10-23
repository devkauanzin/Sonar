import { cliente } from '../config/cliente'
import { Midia } from '../components/ui/Midia'
import { Sobretitulo } from '../components/ui/Sobretitulo'
import { comEnfase } from '../lib/texto'

/** Só é renderizada quando existem depoimentos reais configurados. */
export function Depoimentos() {
  const d = cliente.depoimentos
  return (
    <section id="depoimentos" className="secao depoimentos">
      <div className="container">
        <header className="depoimentos__cabeca" data-revelar>
          <Sobretitulo>{d.sobretitulo}</Sobretitulo>
          <h2 className="titulo-secao">{comEnfase(d.titulo)}</h2>
        </header>
        <ul className="depoimentos__lista">
          {d.itens.map((item) => (
            <li key={item.nome} className="depoimento" data-revelar>
              <blockquote>
                <p>{item.texto}</p>
              </blockquote>
              <div className="depoimento__autor">
                {item.foto?.src && <Midia imagem={item.foto} className="depoimento__foto" />}
                <div>
                  <p className="depoimento__nome">{item.nome}</p>
                  {item.detalhe && <p className="depoimento__detalhe">{item.detalhe}</p>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
