import { cliente } from '../config/cliente'
import { Logo } from '../components/ui/Logo'
import { linkWhatsApp } from '../lib/links'
import { secaoVisivel } from '../lib/secoes'

export function Rodape() {
  const { empresa, contato, rodape, navegacao } = cliente
  const ano = new Date().getFullYear()
  const wa = linkWhatsApp()

  return (
    <footer className="rodape">
      <div className="container rodape__grade">
        <div className="rodape__marca">
          <Logo claro />
          {rodape.descricao && <p>{rodape.descricao}</p>}
        </div>

        <nav aria-label="Rodapé" className="rodape__coluna">
          <p className="rodape__titulo">Navegação</p>
          <ul>
            {navegacao
              .filter((n) => secaoVisivel(n.secao))
              .map((n) => (
                <li key={n.secao}>
                  <a href={`#${n.secao}`}>{n.rotulo}</a>
                </li>
              ))}
          </ul>
        </nav>

        <div className="rodape__coluna">
          <p className="rodape__titulo">Contato</p>
          <ul>
            {contato.telefones.map((t) => (
              <li key={t.tel}>
                <a href={`tel:${t.tel}`}>{t.numero}</a>
              </li>
            ))}
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            )}
            {contato.instagram && (
              <li>
                <a href={contato.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram {contato.instagram.usuario}
                </a>
              </li>
            )}
            {contato.email && (
              <li>
                <a href={`mailto:${contato.email}`}>{contato.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container rodape__legal">
        <p>
          © {ano} {empresa.nomeComercial}
          {rodape.cnpj && <> · CNPJ {rodape.cnpj}</>}
        </p>
        {rodape.responsavelTecnico && <p>{rodape.responsavelTecnico}</p>}
        {rodape.textoLegal && <p>{rodape.textoLegal}</p>}
        {rodape.politicaPrivacidade && (
          <p>
            <a href={rodape.politicaPrivacidade}>Política de privacidade</a>
          </p>
        )}
      </div>
    </footer>
  )
}
