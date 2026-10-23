import type { ClienteConfig } from './tipos.ts'
import { temaPadrao } from './temas.ts'

/**
 * CLIENTE: Clínica Sonar — Itaúna/MG
 * Fonte dos dados: perfil @clinica_sonar no Instagram (bio e publicações).
 *
 * Pendências marcadas com "PENDENTE" devem ser confirmadas com a clínica
 * antes da publicação. Campos vazios não aparecem no site.
 */

const WHATSAPP = '5537998706999'

export const cliente: ClienteConfig = {
  empresa: {
    nome: 'Clínica Sonar',
    nomeComercial: 'Clínica Sonar Itaúna',
    cidade: 'Itaúna, MG',
    seo: {
      titulo: 'Clínica Sonar Itaúna — Especialidades Médicas e Ultrassom',
      descricao:
        'Clínica de especialidades médicas e ultrassom em Itaúna (MG). Clínico geral, endocrinologia, dermatologia, nutrição, ultrassom e Holter 24h. Agende pelo WhatsApp.',
    },
    idioma: 'pt-BR',
  },

  marca: {
    // Símbolo vetorizado a partir da logo oficial enviada pela clínica.
    // `logo` vazio = o site compõe "S + símbolo + NAR", como nos posts da clínica.
    logo: '',
    logoClaro: '',
    simbolo: '/clientes/sonar/simbolo.svg',
    composicao: 'S{simbolo}NAR',
    complemento: 'Itaúna',
  },

  tema: {
    ...temaPadrao,
    cores: {
      primaria: '#D47B43',
      sobrePrimaria: '#1F2429',
      secundaria: '#A6461B',
      destaque: '#E6C6AA',
      // Branco gelo
      fundo: '#F5F7F8',
      fundoAlternativo: '#EDF1F3',
      fundoEscuro: '#1F2429',
      texto: '#1F2429',
      textoSecundario: '#5C6670',
      textoSobreEscuro: '#F5F7F8',
      linha: '#DDE3E7',
    },
    fontes: {
      titulos: 'Arial, Helvetica, sans-serif',
      textos: 'Arial, Helvetica, sans-serif',
      pesoTitulos: 700,
      escalaTitulos: 0.72,
    },
    raio: 10,
    motivo: 'nenhum',
  },

  contato: {
    ativo: true,
    sobretitulo: 'Contato',
    titulo: 'Fale com *a Sonar*',
    texto: 'Agendamentos e dúvidas pelos canais abaixo. Prefere mensagem? O WhatsApp é o caminho mais rápido.',
    whatsapp: {
      numero: WHATSAPP,
      mensagemPadrao: 'Olá! Vim pelo site e gostaria de agendar um atendimento na Clínica Sonar.',
      flutuante: true,
    },
    telefones: [
      { rotulo: 'Telefone fixo', numero: '(37) 3402-2999', tel: '+553734022999' },
      { rotulo: 'WhatsApp', numero: '(37) 9 9870-6999', tel: '+5537998706999' },
    ],
    email: '',
    instagram: { usuario: '@clinica_sonar', url: 'https://www.instagram.com/clinica_sonar/' },
    // PENDENTE: endereço completo não consta no perfil. Preencher para exibir.
    endereco: undefined,
    mapa: {
      url: 'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20Sonar%20Ita%C3%BAna%20MG',
      rotulo: 'Encontrar no Google Maps',
    },
    // PENDENTE: horário de funcionamento. Ex.: { dias: 'Segunda a sexta', horas: '7h às 18h' }
    horarios: [],
  },

  navegacao: [
    { rotulo: 'Especialidades', secao: 'servicos' },
    { rotulo: 'A clínica', secao: 'sobre' },
    { rotulo: 'Como agendar', secao: 'comoFunciona' },
    { rotulo: 'Contato', secao: 'contato' },
  ],

  ordem: ['hero', 'servicos', 'sobre', 'diferenciais', 'comoFunciona', 'depoimentos', 'ctaFinal', 'contato'],

  hero: {
    ativo: true,
    layout: 'centro',
    proporcao: [7, 5],
    sobretitulo: 'Especialidades médicas & ultrassom',
    titulo: 'Escutar com atenção. *Enxergar além.*',
    subtitulo:
      'Consultas com clínico geral, endocrinologia, dermatologia e nutrição, exames de ultrassom e Holter 24 horas em um só endereço, em Itaúna.',
    destaques: ['Consultas e exames no mesmo lugar', 'Ultrassom além do gestacional', 'Agendamento pelo WhatsApp'],
    botaoPrincipal: { rotulo: 'Agendar pelo WhatsApp', destino: 'whatsapp' },
    botaoSecundario: { rotulo: 'Ligar (37) 3402-2999', destino: 'telefone' },
    // Layout 'centro' sem imagem: o topo fica só com o texto centralizado.
    imagem: { src: '', alt: 'Sala de exames da Clínica Sonar' },
  },

  servicos: {
    ativo: true,
    layout: 'indice',
    sobretitulo: 'O que você encontra aqui',
    titulo: 'Especialidades *e exames*',
    introducao:
      'Avaliação clínica e exame de imagem caminhando juntos, para que você entenda o que está acontecendo sem precisar percorrer vários endereços.',
    itens: [
      {
        nome: 'Clínico geral',
        categoria: 'Consulta',
        descricao:
          'O ponto de partida do cuidado: investiga sintomas, orienta exames e acompanha a sua saúde de forma integral e personalizada.',
        linkRotulo: 'Agendar consulta',
        mensagem: 'Olá! Gostaria de agendar uma consulta com o clínico geral.',
      },
      {
        nome: 'Endocrinologia',
        categoria: 'Consulta',
        descricao:
          'Cuida dos hormônios e do metabolismo: tireoide, diabetes, peso, colesterol e outras alterações que afetam a energia e o bem-estar no dia a dia.',
        linkRotulo: 'Agendar consulta',
        mensagem: 'Olá! Gostaria de agendar uma consulta com o endocrinologista.',
      },
      {
        nome: 'Ultrassom',
        categoria: 'Exame',
        descricao:
          'Muito além do acompanhamento gestacional. Um exame de imagem que ajuda a enxergar o que não aparece a olho nu, do pré-natal a outras queixas.',
        linkRotulo: 'Agendar ultrassom',
        mensagem: 'Olá! Gostaria de agendar um exame de ultrassom.',
      },
      {
        nome: 'Holter 24 horas',
        categoria: 'Exame',
        descricao:
          'Monitora o coração por 24 horas ou mais, registrando batimentos, pausas e arritmias que nem sempre aparecem no eletrocardiograma tradicional.',
        linkRotulo: 'Agendar Holter',
        mensagem: 'Olá! Gostaria de agendar o exame Holter 24h.',
      },
      {
        nome: 'Dermatologia',
        categoria: 'Consulta',
        descricao:
          'Cada pele tem um tipo e uma necessidade. O dermatologista avalia, trata e orienta um cuidado possível de manter na sua rotina.',
        linkRotulo: 'Agendar consulta',
        mensagem: 'Olá! Gostaria de agendar uma consulta de dermatologia.',
      },
      {
        nome: 'Nutrição',
        categoria: 'Consulta',
        descricao:
          'Uma alimentação pensada para o seu momento, do dia a dia a fases específicas, como o ciclo menstrual, sem dietas de milagre.',
        linkRotulo: 'Agendar consulta',
        mensagem: 'Olá! Gostaria de agendar uma consulta nutricional.',
      },
    ],
  },

  sobre: {
    ativo: true,
    layout: 'imagem-esquerda',
    sobretitulo: 'A clínica',
    titulo: 'Medicina que escuta *antes de concluir.*',
    nome: 'Clínica Sonar — Itaúna',
    paragrafos: [
      'A Sonar é uma clínica de especialidades médicas e ultrassom em Itaúna. Consultas e exames ficam no mesmo endereço, para que a avaliação e o diagnóstico aconteçam com mais continuidade.',
      'A informação da internet ajuda, mas não substitui uma avaliação. Cada atendimento parte da sua história: ouvir com atenção, examinar com cuidado e explicar com clareza os próximos passos.',
    ],
    // Somente credenciais reais. Nenhuma foi informada até agora.
    credenciais: [],
    // Imagem gerada por IA (ilustrativa). PENDENTE: trocar por foto real da recepção.
    imagem: {
      src: '/clientes/sonar/recepcao.webp',
      alt: 'Recepção de clínica com balcão de madeira e poltronas laranja (imagem ilustrativa)',
      posicao: '40% 50%',
      legenda: 'Imagem ilustrativa',
    },
    citacao: 'O Google pode te informar, mas quem cuida de verdade é o médico.',
  },

  diferenciais: {
    ativo: true,
    sobretitulo: 'Por que a Sonar',
    titulo: 'Um caminho mais curto *entre a dúvida e o cuidado.*',
    itens: [
      {
        titulo: 'Consulta e exame no mesmo lugar',
        descricao: 'Especialidades médicas e ultrassom no mesmo endereço encurtam o caminho entre a avaliação e o exame.',
      },
      {
        titulo: 'Agendamento simples',
        descricao: 'Fale com a equipe pelo WhatsApp ou pelo telefone fixo e combine o horário que funciona para você.',
      },
      {
        titulo: 'Ultrassom para além da gestação',
        descricao: 'O exame acompanha a gravidez e também é um aliado na investigação de outras queixas de saúde.',
      },
      {
        titulo: 'Informação de saúde no dia a dia',
        descricao:
          'No Instagram @clinica_sonar, a clínica publica conteúdos sobre sintomas, prevenção e campanhas como Setembro Amarelo e Outubro Rosa.',
      },
    ],
  },

  comoFunciona: {
    ativo: true,
    sobretitulo: 'Como agendar',
    titulo: 'Quatro passos *até o seu atendimento.*',
    etapas: [
      { titulo: 'Chame a equipe', descricao: 'Mande uma mensagem para (37) 9 9870-6999 ou ligue para (37) 3402-2999.' },
      { titulo: 'Conte o que precisa', descricao: 'Informe a especialidade ou o exame e tire as suas dúvidas antes de marcar.' },
      { titulo: 'Escolha o horário', descricao: 'Combine com a equipe a data que melhor se encaixa na sua rotina.' },
      {
        titulo: 'Venha à clínica',
        descricao: 'Chegue no horário combinado. Se tiver pedido médico ou exames anteriores, traga com você.',
      },
    ],
    botao: { rotulo: 'Começar pelo WhatsApp', destino: 'whatsapp' },
  },

  depoimentos: {
    // A clínica tem um destaque "Feedback" no Instagram. Para exibir aqui,
    // transcreva apenas depoimentos reais, com autorização do paciente.
    ativo: false,
    sobretitulo: 'Quem já passou por aqui',
    titulo: 'Palavras de *pacientes*',
    itens: [],
  },

  ctaFinal: {
    ativo: true,
    titulo: 'Sua saúde merece *atenção de perto.*',
    texto: 'Consultas e exames na Clínica Sonar começam com uma mensagem. A equipe responde e ajuda você a escolher o melhor horário.',
    botao: { rotulo: 'Agendar pelo WhatsApp', destino: 'whatsapp' },
    botaoSecundario: { rotulo: 'Ligar (37) 3402-2999', destino: 'telefone' },
  },

  rodape: {
    descricao: 'Clínica de especialidades médicas e ultrassom em Itaúna, Minas Gerais.',
    politicaPrivacidade: '',
    // PENDENTE (obrigatório em publicidade médica — Resolução CFM 2.336/2023):
    // 'Responsável técnico: Dr(a). Nome Sobrenome — CRM-MG 00000'
    responsavelTecnico: '',
    cnpj: '',
    textoLegal: 'As informações deste site têm caráter informativo e não substituem uma consulta médica.',
  },
}
