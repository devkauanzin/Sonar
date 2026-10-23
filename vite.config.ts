import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cliente } from './src/config/cliente.ts'

const escapar = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Preenche título, descrição e cor do index.html a partir de src/config/cliente.ts,
// para que o SEO já saia correto no HTML estático.
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dados-do-cliente',
      transformIndexHtml: (html) =>
        html
          .replaceAll('__IDIOMA__', cliente.empresa.idioma)
          .replaceAll('__TITULO__', escapar(cliente.empresa.seo.titulo))
          .replaceAll('__DESCRICAO__', escapar(cliente.empresa.seo.descricao))
          .replaceAll('__COR_FUNDO__', cliente.tema.cores.fundo),
    },
  ],
})
