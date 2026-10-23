# Template master de landing page — cliente atual: Clínica Sonar (Itaúna/MG)

React + TypeScript + Vite, com CSS puro baseado em variáveis. Sem framework de UI.

```bash
npm install
npm run dev       # desenvolvimento (http://localhost:5173)
npm run build     # checa os tipos e gera dist/ para publicação
npm run preview   # serve o dist/ localmente
```

## Onde fica cada coisa

| Arquivo | Para quê |
| --- | --- |
| `src/config/cliente.ts` | **Todos os dados do cliente**: textos, serviços, contatos, cores, layouts, seções ativas |
| `src/config/fontes.ts` | Quais fontes são carregadas (self-hosted via @fontsource) |
| `src/config/temas.ts` | Tema padrão do template (marfim + bordô), base para clientes novos |
| `src/config/tipos.ts` | Contrato de tipos (o editor avisa se faltar algum campo) |
| `public/clientes/<cliente>/` | Logo, símbolo e fotos do cliente |
| `src/sections/*` | Uma seção por arquivo; não precisa editar para trocar de cliente |
| `src/styles/*` | Estilos; só leem variáveis `--cor-*`, `--fonte-*`, `--raio`, `--respiro` |

## Criar a versão de um novo cliente

1. Copie o projeto e crie `public/clientes/<novo-cliente>/`.
2. Em `src/config/cliente.ts`, troque:
   - `empresa` — nome, cidade, título e descrição de SEO (vão direto para o `<head>` do HTML).
   - `marca` — caminhos da logo (veja abaixo).
   - `tema` — cores, `raio` (arredondamento de botões e fotos; 0 = arestas retas), `respiro`
     (espaço entre seções) e `motivo` (`'ondas'`, `'losangos'`, `'linhas'` ou `'nenhum'` para fundo limpo).
   - `contato` — WhatsApp, telefones, e-mail, Instagram, endereço, link do mapa, horários.
   - Os blocos de cada seção (`hero`, `servicos`, `sobre`, `diferenciais`, `comoFunciona`,
     `depoimentos`, `ctaFinal`, `contato`) e o `rodape`.
3. Use `*asteriscos*` nos títulos para marcar o trecho em itálico na cor da marca.
4. Campos vazios simplesmente não aparecem. Nunca preencha com dados inventados.

### Composição (para cada cliente não parecer só troca de cor)

- `ordem`: a sequência das seções. Remova um id para tirá-la da página.
- `<secao>.ativo`: liga/desliga. Seções sem conteúdo (ex.: depoimentos vazios) somem sozinhas.
- `hero.layout`: `'leque'` (foto recortada no formato de imagem de ultrassom), `'recorte'`
  (foto retangular sangrando para a borda) ou `'centro'`.
- `hero.proporcao`: proporção texto:imagem no desktop, ex.: `[7, 5]`, `[6, 6]`, `[5, 7]`.
- `servicos.layout`: `'indice'` (lista editorial numerada com título fixo) ou `'grade'`.
- `sobre.layout`: `'imagem-esquerda'` ou `'imagem-direita'`.
- `tema.motivo`: troca os ornamentos (sobretítulos, marcadores das etapas, fundo, CTA).

## Logo e imagens

- **Logo pronta**: coloque o arquivo em `public/clientes/<cliente>/logo.svg` (ou .png em alta) e
  preencha `marca.logo: '/clientes/<cliente>/logo.svg'`. Para o rodapé escuro, use `marca.logoClaro`.
- **Logo composta** (uso atual da Sonar, enquanto o arquivo oficial não chega): com `logo` vazio,
  o site monta `marca.composicao` (`'S{simbolo}NAR'`) usando o símbolo de `marca.simbolo`.
- **Favicon**: substitua `public/favicon.svg`.
- **Fotos**: salve em `public/clientes/<cliente>/` e aponte no `src` correspondente
  (`hero.imagem`, `sobre.imagem`, `sobre.imagemSecundaria`, `servicos.itens[].imagem`).
  Ajuste o enquadramento com `posicao` (ex.: `'50% 30%'`). Tamanhos recomendados: hero e sobre
  verticais com pelo menos 1200 px de altura; secundária quadrada com 800 px. Prefira WebP/JPG.
- Sem `src`, o site desenha uma composição gráfica da marca no lugar. Em `npm run dev` aparece
  um aviso "Foto pendente" sobre ela, que não vai para o build final.
- Só use fotos da própria clínica ou com licença de uso.

## WhatsApp

Em `contato.whatsapp`:

```ts
whatsapp: {
  numero: '5537998706999',      // 55 + DDD + número, só dígitos
  mensagemPadrao: 'Olá! Vim pelo site...',
  flutuante: true,              // botão fixo no canto da tela
}
```

Qualquer botão com `destino: 'whatsapp'` abre `https://wa.me/<numero>?text=<mensagem>`.
Um botão pode ter mensagem própria (`mensagem: '...'`); cada serviço também tem a sua.
`destino: 'telefone'` liga para o primeiro item de `contato.telefones`; qualquer outra string é
usada como link direto.

## Fontes

Atual: **Arial** em títulos e textos (fonte do sistema, nada a carregar). Em `tema.fontes`:
`pesoTitulos` (700 para sans-serif, 400 para serifadas) e `escalaTitulos` (tamanho relativo dos
títulos). Para usar uma fonte da web, `npm i @fontsource/<fonte>`, importe-a em
`src/config/fontes.ts` e ajuste os nomes em `tema.fontes`.
