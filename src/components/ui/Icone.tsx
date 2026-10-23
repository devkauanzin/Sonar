type Nome = 'whatsapp' | 'telefone' | 'instagram' | 'local' | 'relogio' | 'email' | 'seta' | 'menu' | 'fechar'

const caminhos: Record<Nome, string> = {
  whatsapp:
    'M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2Zm0 16a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.6.7.7-2.5-.2-.3A7.2 7.2 0 1 1 12 19.2Zm4-5.4c-.2-.1-1.3-.7-1.5-.7s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a5.9 5.9 0 0 1-2.9-2.6c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9 4.4 4.4 0 0 0 .9 2.3 10 10 0 0 0 3.9 3.4c1.4.6 2 .7 2.7.6a2.3 2.3 0 0 0 1.5-1.1 1.9 1.9 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3Z',
  telefone:
    'M6.6 3.5h2.6l1.4 4-1.8 1.3a11 11 0 0 0 6.4 6.4l1.3-1.8 4 1.4v2.6a2 2 0 0 1-2.2 2A15.8 15.8 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z',
  instagram:
    'M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm4.5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.2-1.9h.01',
  local: 'M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  relogio: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.5V12l3 2',
  email: 'M3.5 6h17v12h-17V6Zm0 0 8.5 7 8.5-7',
  seta: 'M5 12h13m-5-5 5 5-5 5',
  menu: 'M4 8h16M4 16h16',
  fechar: 'M6 6l12 12M18 6 6 18',
}

const preenchidos: Nome[] = ['whatsapp']

export function Icone({ nome, tamanho = 20 }: { nome: Nome; tamanho?: number }) {
  const cheio = preenchidos.includes(nome)
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={cheio ? 'currentColor' : 'none'}
      stroke={cheio ? 'none' : 'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={caminhos[nome]} />
    </svg>
  )
}
