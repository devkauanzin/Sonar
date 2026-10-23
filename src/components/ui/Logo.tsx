import { cliente } from '../../config/cliente'

/** Logo do arquivo configurado ou, na falta dele, composição símbolo + nome. */
export function Logo({ claro = false, compacto = false }: { claro?: boolean; compacto?: boolean }) {
  const { marca, empresa } = cliente
  const arquivo = claro ? marca.logoClaro || marca.logo : marca.logo
  if (arquivo) return <img className="logo logo--arquivo" src={arquivo} alt={empresa.nome} />

  const [antes, depois] = (marca.composicao ?? '{simbolo} ' + empresa.nome).split('{simbolo}')
  return (
    <span className="logo" role="img" aria-label={empresa.nome}>
      <span className="logo__linha" aria-hidden="true">
        {antes && <span>{antes}</span>}
        {marca.simbolo && <img className="logo__simbolo" src={marca.simbolo} alt="" />}
        {depois && <span>{depois}</span>}
      </span>
      {marca.complemento && !compacto && (
        <span className="logo__complemento" aria-hidden="true">
          {marca.complemento}
        </span>
      )}
    </span>
  )
}
