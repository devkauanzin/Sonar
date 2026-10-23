import type { Tema } from '../config/tipos'

const kebab = (s: string) => s.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`)

/** Publica o tema como CSS variables em :root. Os estilos só usam essas variáveis. */
export function aplicarTema(tema: Tema) {
  const raiz = document.documentElement.style
  for (const [nome, valor] of Object.entries(tema.cores)) raiz.setProperty(`--cor-${kebab(nome)}`, valor)
  raiz.setProperty('--fonte-titulos', tema.fontes.titulos)
  raiz.setProperty('--fonte-textos', tema.fontes.textos)
  raiz.setProperty('--raio', `${tema.raio}px`)
  raiz.setProperty('--respiro', String(tema.respiro))
  document.documentElement.dataset.motivo = tema.motivo
}
