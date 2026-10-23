import { useId } from 'react'
import type { Imagem } from '../../config/tipos'

interface Props {
  imagem: Imagem
  className?: string
  /** Carregamento prioritário (imagem da primeira dobra). */
  prioridade?: boolean
}

/**
 * Foto configurada. Sem `src`, desenha uma composição gráfica da marca
 * para o layout nunca quebrar — em desenvolvimento, indica qual foto falta.
 */
export function Midia({ imagem, className = '', prioridade = false }: Props) {
  const id = 'grao' + useId().replace(/[^a-zA-Z0-9]/g, '')
  if (imagem.src) {
    return (
      <img
        className={`midia ${className}`}
        src={imagem.src}
        alt={imagem.alt}
        style={imagem.posicao ? { objectPosition: imagem.posicao } : undefined}
        loading={prioridade ? 'eager' : 'lazy'}
        fetchPriority={prioridade ? 'high' : 'auto'}
        decoding="async"
      />
    )
  }

  return (
    <div className={`midia midia--arte ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
        <defs>
          <pattern id={id} width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".6" fill="currentColor" opacity=".18" />
          </pattern>
        </defs>
        <rect width="400" height="500" fill={`url(#${id})`} />
        {Array.from({ length: 9 }, (_, i) => (
          <circle key={i} cx="200" cy="-40" r={90 + i * 62} fill="none" stroke="currentColor" opacity={0.5 - i * 0.045} />
        ))}
      </svg>
      {import.meta.env.DEV && <span className="midia__aviso">Foto pendente: {imagem.alt}</span>}
    </div>
  )
}
