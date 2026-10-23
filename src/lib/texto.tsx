import { Fragment, type ReactNode } from 'react'

/** Transforma "Texto *com ênfase*" em nós React, com <em> no trecho marcado. */
export function comEnfase(texto: string): ReactNode {
  return texto.split(/(\*[^*]+\*)/g).map((parte, i) =>
    parte.startsWith('*') && parte.endsWith('*') ? (
      <em key={i}>{parte.slice(1, -1)}</em>
    ) : (
      <Fragment key={i}>{parte}</Fragment>
    ),
  )
}

export const doisDigitos = (n: number) => String(n).padStart(2, '0')
