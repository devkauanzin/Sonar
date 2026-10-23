import type { Botao as BotaoConfig } from '../../config/tipos'
import { resolverBotao } from '../../lib/links'
import { Icone } from './Icone'

interface Props {
  botao: BotaoConfig
  variante?: 'primario' | 'contorno' | 'escuro'
  className?: string
}

/** Botão ligado a um destino real. Se o destino não estiver configurado, nada é renderizado. */
export function Botao({ botao, variante = 'primario', className = '' }: Props) {
  const link = resolverBotao(botao)
  if (!link) return null
  const icone = botao.destino === 'whatsapp' ? 'whatsapp' : botao.destino === 'telefone' ? 'telefone' : 'seta'
  return (
    <a
      className={`botao botao--${variante} ${className}`}
      href={link.href}
      {...(link.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icone nome={icone} tamanho={icone === 'seta' ? 18 : 20} />
      <span>{botao.rotulo}</span>
    </a>
  )
}
