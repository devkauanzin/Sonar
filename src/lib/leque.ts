/**
 * Polígono de um setor circular (o "leque" de uma imagem de ultrassom),
 * normalizado para a caixa que o contém. Usado como clip-path.
 */
export function setor(angulo = 33, raioInterno = 0.18, passos = 48) {
  const t = (angulo * Math.PI) / 180
  const largura = 2 * Math.sin(t)
  const topo = raioInterno * Math.cos(t)
  const altura = 1 - topo
  const ponto = (r: number, a: number) => {
    const x = ((r * Math.sin(a) + Math.sin(t)) / largura) * 100
    const y = ((r * Math.cos(a) - topo) / altura) * 100
    return `${x.toFixed(2)}% ${y.toFixed(2)}%`
  }
  const pts: string[] = []
  for (let i = 0; i <= passos; i++) pts.push(ponto(1, t - (2 * t * i) / passos))
  for (let i = 0; i <= passos / 4; i++) pts.push(ponto(raioInterno, -t + (2 * t * i) / (passos / 4)))
  return { clipPath: `polygon(${pts.join(', ')})`, proporcao: largura / altura }
}
