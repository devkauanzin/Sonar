import type { Tema } from './tipos.ts'

/**
 * Identidade padrão do template (marfim + bordô + areia).
 * Use como ponto de partida para um cliente novo: `tema: { ...temaPadrao, cores: { ... } }`.
 */
export const temaPadrao: Tema = {
  cores: {
    primaria: '#7A1F2B',
    sobrePrimaria: '#FBF6EE',
    secundaria: '#5E1520',
    destaque: '#C9A97A',
    fundo: '#F7F1E7',
    fundoAlternativo: '#EFE6D8',
    fundoEscuro: '#2A1418',
    texto: '#231A17',
    textoSecundario: '#6A5C55',
    textoSobreEscuro: '#F4ECE1',
    linha: '#DDD0BE',
  },
  fontes: {
    titulos: "'Instrument Serif', 'Times New Roman', serif",
    textos: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif",
  },
  raio: 2,
  respiro: 1,
  motivo: 'losangos',
}
