import { cliente } from '../config/cliente'
import { Motivo } from '../components/ui/Motivo'
import { Sobretitulo } from '../components/ui/Sobretitulo'
import { comEnfase, doisDigitos } from '../lib/texto'

export function Diferenciais() {
  const d = cliente.diferenciais
  return (
    <section id="diferenciais" className="secao secao--escura diferenciais">
      <Motivo className="diferenciais__motivo" x={0} y={100} tamanho={640} aneis={8} />
      <div className="container">
        <header className="diferenciais__cabeca" data-revelar>
          <Sobretitulo claro>{d.sobretitulo}</Sobretitulo>
          <h2 className="titulo-secao">{comEnfase(d.titulo)}</h2>
        </header>
        <ol className="diferenciais__lista">
          {d.itens.map((item, i) => (
            <li key={item.titulo} className="diferencial" data-revelar style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="diferencial__numero" aria-hidden="true">
                {doisDigitos(i + 1)}
              </span>
              <h3 className="diferencial__titulo">{item.titulo}</h3>
              <p className="diferencial__descricao">{item.descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
