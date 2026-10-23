import { cliente } from '../config/cliente'
import type { Botao } from '../config/tipos'

export function linkWhatsApp(mensagem?: string): string | undefined {
  const wa = cliente.contato.whatsapp
  if (!wa?.numero) return undefined
  const texto = encodeURIComponent(mensagem ?? wa.mensagemPadrao)
  return `https://wa.me/${wa.numero.replace(/\D/g, '')}?text=${texto}`
}

export function linkTelefone(): string | undefined {
  const tel = cliente.contato.telefones[0]?.tel
  return tel ? `tel:${tel}` : undefined
}

export interface LinkResolvido {
  href: string
  externo: boolean
}

/** Converte o destino configurado num href real. Retorna undefined se não houver destino válido. */
export function resolverBotao(botao: Botao): LinkResolvido | undefined {
  if (botao.destino === 'whatsapp') {
    const href = linkWhatsApp(botao.mensagem)
    return href ? { href, externo: true } : undefined
  }
  if (botao.destino === 'telefone') {
    const href = linkTelefone()
    return href ? { href, externo: false } : undefined
  }
  if (!botao.destino) return undefined
  return { href: botao.destino, externo: /^https?:\/\//.test(botao.destino) }
}
