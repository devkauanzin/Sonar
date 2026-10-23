import { cliente } from '../config/cliente'
import type { SecaoId } from '../config/tipos'

/** Uma seção aparece se está na ordem, está ativa e tem conteúdo mínimo. */
export function secaoVisivel(id: SecaoId): boolean {
  if (!cliente.ordem.includes(id)) return false
  if (!cliente[id].ativo) return false
  switch (id) {
    case 'servicos':
      return cliente.servicos.itens.length > 0
    case 'diferenciais':
      return cliente.diferenciais.itens.length > 0
    case 'comoFunciona':
      return cliente.comoFunciona.etapas.length > 0
    case 'depoimentos':
      return cliente.depoimentos.itens.length > 0
    default:
      return true
  }
}
