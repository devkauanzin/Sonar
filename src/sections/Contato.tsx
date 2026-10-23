import type { ReactNode } from 'react'
import { cliente } from '../config/cliente'
import { Icone } from '../components/ui/Icone'
import { Sobretitulo } from '../components/ui/Sobretitulo'
import { linkWhatsApp } from '../lib/links'
import { comEnfase } from '../lib/texto'

function Linha({ icone, rotulo, children }: { icone: Parameters<typeof Icone>[0]['nome']; rotulo: string; children: ReactNode }) {
  return (
    <div className="contato__linha">
      <dt>
        <Icone nome={icone} tamanho={18} />
        {rotulo}
      </dt>
      <dd>{children}</dd>
    </div>
  )
}

export function Contato() {
  const c = cliente.contato
  const wa = linkWhatsApp()
  const ehWhatsApp = (tel: string) => tel.replace(/\D/g, '') === c.whatsapp?.numero
  const fixos = c.telefones.filter((t) => !ehWhatsApp(t.tel))
  const waTel = c.telefones.find((t) => ehWhatsApp(t.tel))
  const e = c.endereco

  return (
    <section id="contato" className="secao contato">
      <div className="container contato__grade">
        <header className="contato__cabeca" data-revelar>
          <Sobretitulo>{c.sobretitulo}</Sobretitulo>
          <h2 className="titulo-secao">{comEnfase(c.titulo)}</h2>
          {c.texto && <p className="contato__texto">{c.texto}</p>}
        </header>

        <dl className="contato__lista" data-revelar>
          {wa && waTel && (
            <Linha icone="whatsapp" rotulo="WhatsApp">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                {waTel.numero}
              </a>
            </Linha>
          )}
          {fixos.map((t) => (
            <Linha key={t.tel} icone="telefone" rotulo={t.rotulo}>
              <a href={`tel:${t.tel}`}>{t.numero}</a>
            </Linha>
          ))}
          {c.email && (
            <Linha icone="email" rotulo="E-mail">
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </Linha>
          )}
          {c.instagram && (
            <Linha icone="instagram" rotulo="Instagram">
              <a href={c.instagram.url} target="_blank" rel="noopener noreferrer">
                {c.instagram.usuario}
              </a>
            </Linha>
          )}
          {(e || c.mapa) && (
            <Linha icone="local" rotulo="Endereço">
              {e && (
                <address>
                  {e.linha1}
                  {e.linha2 && <>, {e.linha2}</>}
                  <br />
                  {e.cidade} — {e.uf}
                  {e.cep && <> · CEP {e.cep}</>}
                </address>
              )}
              {!e && cliente.empresa.cidade && <span>{cliente.empresa.cidade}</span>}
              {c.mapa && (
                <a className="contato__mapa" href={c.mapa.url} target="_blank" rel="noopener noreferrer">
                  {c.mapa.rotulo}
                  <Icone nome="seta" tamanho={16} />
                </a>
              )}
            </Linha>
          )}
          {c.horarios.length > 0 && (
            <Linha icone="relogio" rotulo="Horários">
              <ul className="contato__horarios">
                {c.horarios.map((h) => (
                  <li key={h.dias}>
                    <span>{h.dias}</span>
                    <span>{h.horas}</span>
                  </li>
                ))}
              </ul>
            </Linha>
          )}
        </dl>
      </div>
    </section>
  )
}
