import type { ComponentType } from 'react'
import { cliente } from './config/cliente'
import type { SecaoId } from './config/tipos'
import { WhatsAppFlutuante } from './components/WhatsAppFlutuante'
import { secaoVisivel } from './lib/secoes'
import { useRevelar } from './lib/useRevelar'
import { Cabecalho } from './sections/Cabecalho'
import { ComoFunciona } from './sections/ComoFunciona'
import { Contato } from './sections/Contato'
import { CtaFinal } from './sections/CtaFinal'
import { Depoimentos } from './sections/Depoimentos'
import { Diferenciais } from './sections/Diferenciais'
import { Hero } from './sections/Hero'
import { Rodape } from './sections/Rodape'
import { Servicos } from './sections/Servicos'
import { Sobre } from './sections/Sobre'

const secoes: Record<SecaoId, ComponentType> = {
  hero: Hero,
  servicos: Servicos,
  sobre: Sobre,
  diferenciais: Diferenciais,
  comoFunciona: ComoFunciona,
  depoimentos: Depoimentos,
  ctaFinal: CtaFinal,
  contato: Contato,
}

export function App() {
  useRevelar()
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        {cliente.ordem.filter(secaoVisivel).map((id) => {
          const Secao = secoes[id]
          return <Secao key={id} />
        })}
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  )
}
