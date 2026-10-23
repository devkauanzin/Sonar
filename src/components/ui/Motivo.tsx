import { cliente } from '../../config/cliente'

interface Props {
  /** Posição do centro do desenho, em % da área. */
  x?: number
  y?: number
  /** Raio do maior elemento, em px. */
  tamanho?: number
  aneis?: number
  className?: string
}

/**
 * Elemento geométrico de fundo definido por `tema.motivo`.
 * ondas: arcos concêntricos (eco de sonar). losangos: losangos aninhados. linhas: grade fina.
 */
export function Motivo({ x = 80, y = 50, tamanho = 520, aneis = 6, className = '' }: Props) {
  const motivo = cliente.tema.motivo
  if (motivo === 'nenhum') return null
  const passo = tamanho / aneis
  const itens = Array.from({ length: aneis }, (_, i) => tamanho - i * passo)

  return (
    <svg className={`motivo ${className}`} aria-hidden="true" focusable="false" width="100%" height="100%">
      <svg x={`${x}%`} y={`${y}%`} overflow="visible">
        {motivo === 'ondas' &&
          itens.map((r, i) => <circle key={i} cx={0} cy={0} r={r} fill="none" stroke="currentColor" />)}
        {motivo === 'losangos' &&
          itens.map((r, i) => (
            <rect key={i} x={-r / 1.5} y={-r / 1.5} width={(r / 1.5) * 2} height={(r / 1.5) * 2} transform="rotate(45)" fill="none" stroke="currentColor" />
          ))}
        {motivo === 'linhas' &&
          itens.map((r, i) => <line key={i} x1={-tamanho} x2={tamanho} y1={r - tamanho / 2} y2={r - tamanho / 2} stroke="currentColor" />)}
      </svg>
    </svg>
  )
}
