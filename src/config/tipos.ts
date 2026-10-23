/**
 * Contrato do template. Tudo que é específico de um cliente mora em
 * `cliente.ts`; os componentes só leem estes tipos.
 */

export type SecaoId =
  | 'hero'
  | 'servicos'
  | 'sobre'
  | 'diferenciais'
  | 'comoFunciona'
  | 'depoimentos'
  | 'ctaFinal'
  | 'contato'

/** Motivo gráfico de fundo: ondas (arcos concêntricos), losangos ou linhas finas. */
export type Motivo = 'ondas' | 'losangos' | 'linhas'

export interface Imagem {
  /** Caminho a partir de /public. Vazio = o template desenha uma composição gráfica no lugar. */
  src?: string
  alt: string
  /** CSS object-position, ex.: "50% 30%". */
  posicao?: string
}

export interface Botao {
  rotulo: string
  /** 'whatsapp' usa o número configurado; 'telefone' liga para o primeiro telefone; ou um href qualquer. */
  destino: 'whatsapp' | 'telefone' | string
  /** Mensagem pré-preenchida quando o destino é o WhatsApp. */
  mensagem?: string
}

export interface Tema {
  cores: {
    /** Cor da marca (botões, destaques). */
    primaria: string
    /** Texto sobre a cor primária. */
    sobrePrimaria: string
    /** Versão escura da marca para textos e detalhes finos sobre fundo claro. */
    secundaria: string
    /** Tom de apoio (areia, dourado) para linhas e motivos. */
    destaque: string
    fundo: string
    fundoAlternativo: string
    /** Fundo das seções escuras. */
    fundoEscuro: string
    texto: string
    textoSecundario: string
    textoSobreEscuro: string
    linha: string
  }
  fontes: {
    /** font-family completa. As fontes são carregadas em `fontes.ts`. */
    titulos: string
    textos: string
  }
  /** Raio de borda base em px. 0 = arestas retas, editorial. */
  raio: number
  /** Escala de espaçamento vertical entre seções (1 = padrão). */
  respiro: number
  motivo: Motivo
}

export interface Servico {
  nome: string
  descricao: string
  /** Rótulo curto, ex.: "Consulta", "Exame". */
  categoria?: string
  imagem?: Imagem
  /** Texto do link do item. Se omitido, o item não tem link. */
  linkRotulo?: string
  /** Mensagem do WhatsApp para esse serviço. */
  mensagem?: string
}

export interface ItemTexto {
  titulo: string
  descricao: string
}

export interface Depoimento {
  nome: string
  texto: string
  /** Contexto opcional, ex.: "Paciente desde 2021". Só com autorização. */
  detalhe?: string
  foto?: Imagem
}

export interface Horario {
  dias: string
  horas: string
}

export interface ClienteConfig {
  empresa: {
    nome: string
    nomeComercial: string
    cidade?: string
    /** Usado em <title>, description e Open Graph. */
    seo: { titulo: string; descricao: string }
    idioma: string
  }
  marca: {
    /** Arquivo da logo completa. Se vazio, o template compõe símbolo + nome. */
    logo?: string
    /** Versão para fundos escuros. */
    logoClaro?: string
    /** Símbolo isolado (favicon, composição automática). */
    simbolo?: string
    /** Como escrever o nome quando a logo é composta: o símbolo entra no lugar de `{simbolo}`. */
    composicao?: string
    /** Texto pequeno abaixo do nome na logo composta (ex.: unidade). */
    complemento?: string
  }
  tema: Tema
  /** Dados de contato (usados no site todo) + textos da seção de contato. */
  contato: {
    ativo: boolean
    sobretitulo: string
    titulo: string
    texto?: string
    whatsapp?: { numero: string; mensagemPadrao: string; flutuante: boolean }
    telefones: { rotulo: string; numero: string; tel: string }[]
    email?: string
    instagram?: { usuario: string; url: string }
    endereco?: { linha1: string; linha2?: string; cidade: string; uf: string; cep?: string }
    /** Link do Google Maps. */
    mapa?: { url: string; rotulo: string }
    horarios: Horario[]
  }
  navegacao: { rotulo: string; secao: SecaoId }[]

  /** Ordem de exibição. Seções fora da lista, ou com `ativo: false`, não aparecem. */
  ordem: SecaoId[]

  hero: {
    ativo: boolean
    /** 'leque': foto dentro de um setor (formato de imagem de ultrassom). 'recorte': foto retangular sangrando à direita. 'centro': texto centralizado. */
    layout: 'leque' | 'recorte' | 'centro'
    /** Proporção texto:imagem em telas grandes, ex.: [7, 5]. */
    proporcao: [number, number]
    sobretitulo: string
    /** Use *asteriscos* para o trecho em itálico na cor da marca. */
    titulo: string
    subtitulo: string
    destaques: string[]
    botaoPrincipal: Botao
    botaoSecundario?: Botao
    imagem: Imagem
    /** Etiqueta escura sobreposta à imagem. */
    etiqueta?: string
  }

  servicos: {
    ativo: boolean
    layout: 'indice' | 'grade'
    sobretitulo: string
    titulo: string
    introducao?: string
    itens: Servico[]
  }

  sobre: {
    ativo: boolean
    layout: 'imagem-esquerda' | 'imagem-direita'
    sobretitulo: string
    titulo: string
    nome: string
    paragrafos: string[]
    /** Somente credenciais reais e verificáveis. */
    credenciais: string[]
    imagem: Imagem
    imagemSecundaria?: Imagem
    citacao?: string
  }

  diferenciais: {
    ativo: boolean
    sobretitulo: string
    titulo: string
    itens: ItemTexto[]
  }

  comoFunciona: {
    ativo: boolean
    sobretitulo: string
    titulo: string
    etapas: ItemTexto[]
    botao?: Botao
  }

  depoimentos: {
    ativo: boolean
    sobretitulo: string
    titulo: string
    /** Apenas depoimentos reais e autorizados. Lista vazia esconde a seção. */
    itens: Depoimento[]
  }

  ctaFinal: {
    ativo: boolean
    titulo: string
    texto: string
    botao: Botao
    botaoSecundario?: Botao
  }

  rodape: {
    descricao?: string
    /** URL de uma página de política que exista de fato. */
    politicaPrivacidade?: string
    /** Ex.: "Responsável técnico: Dr(a). Nome — CRM-MG 00000". Exigido em publicidade médica. */
    responsavelTecnico?: string
    cnpj?: string
    textoLegal?: string
  }
}
