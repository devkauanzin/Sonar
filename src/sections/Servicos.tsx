import { cliente } from '../config/cliente'
import { Icone } from '../components/ui/Icone'
import { Midia } from '../components/ui/Midia'
import { Sobretitulo } from '../components/ui/Sobretitulo'
import { linkWhatsApp } from '../lib/links'
import { comEnfase, doisDigitos } from '../lib/texto'

export function Servicos() {
  const s = cliente.servicos
  return (
    <section id="servicos" className={`secao servicos servicos--${s.layout}`}>
      <div className="container servicos__grade">
        <header className="servicos__cabeca" data-revelar>
          <Sobretitulo>{s.sobretitulo}</Sobretitulo>
          <h2 className="titulo-secao">{comEnfase(s.titulo)}</h2>
          {s.introducao && <p className="servicos__intro">{s.introducao}</p>}
          <p className="servicos__contagem" aria-hidden="true">
            <span>{doisDigitos(s.itens.length)}</span> frentes de cuidado
          </p>
        </header>

        <ol className="servicos__lista">
          {s.itens.map((item, i) => {
            const href = item.linkRotulo ? linkWhatsApp(item.mensagem) : undefined
            return (
              <li key={item.nome} className="servico" data-revelar>
                <span className="servico__numero" aria-hidden="true">
                  {doisDigitos(i + 1)}
                </span>
                <div className="servico__corpo">
                  <div className="servico__topo">
                    <h3 className="servico__nome">{item.nome}</h3>
                    {item.categoria && <span className="servico__categoria">{item.categoria}</span>}
                  </div>
                  <p className="servico__descricao">{item.descricao}</p>
                  {href && (
                    <a className="servico__link" href={href} target="_blank" rel="noopener noreferrer">
                      {item.linkRotulo}
                      <Icone nome="seta" tamanho={16} />
                    </a>
                  )}
                </div>
                {item.imagem?.src && <Midia imagem={item.imagem} className="servico__imagem" />}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
