# 🪒 Barbearia Amorim - Website Oficial

Landing page moderna e otimizada para a Barbearia Amorim em Arcozelo, Barcelos.

## 🚀 Otimizações Implementadas

### ✅ SEO (Search Engine Optimization)
- **Meta tags completas**: Title, description, keywords otimizados
- **Open Graph**: Preview perfeito em redes sociais (Facebook, WhatsApp)
- **Twitter Cards**: Preview otimizado para Twitter
- **Structured Data (JSON-LD)**: Google entende perfeitamente o negócio
  - LocalBusiness schema
  - Service schema com preços
  - Aggregate ratings (4.7★)
  - Opening hours
- **Canonical URL**: Evita conteúdo duplicado
- **Alt text descritivo**: Todas as imagens com descrições SEO-friendly
- **Sitemap ready**: Pronto para adicionar sitemap.xml

### ⚡ Performance
- **Lazy Loading**: Imagens carregam só quando visíveis
- **Cloudinary Optimizations**: 
  - `q_auto:good` - Qualidade automática
  - `f_auto` - Formato automático (WebP quando suportado)
  - `c_scale,w_800` - Resize para tamanho apropriado
- **Preconnect**: DNS resolution antecipada para Cloudinary e Google Fonts
- **Font Display Swap**: Evita FOIT (Flash of Invisible Text)
- **Video Optimizations**: 
  - `preload="metadata"` - Carrega só metadata
  - Poster image para fallback
  - Cloudinary video optimization
- **Priority Loading**: Hero image com `fetchPriority="high"`

### 📱 Mobile-First & Responsive
- **Breakpoints otimizados**: Mobile, Tablet, Desktop
- **Touch-friendly**: Botões grandes, fácil interação
- **Viewport optimized**: Meta viewport configurado
- **Flexible layouts**: Grid e Flexbox responsivos

### 🎨 UX/UI Enhancements
- **Smooth scroll**: Navegação suave entre secções
- **Hover states**: Feedback visual em todos os elementos interativos
- **Loading states**: Previne layout shifts
- **Accessibility**: Semantic HTML, ARIA labels onde necessário

## 📦 Deploy na Netlify

### Opção 1: Drag & Drop (Mais Rápido)
1. Vai a https://app.netlify.com/drop
2. Arrasta a pasta do projeto
3. Done! ✅

### Opção 2: Git Deploy (Recomendado)
1. Cria repositório no GitHub
2. Push do código:
```bash
git init
git add .
git commit -m "Initial commit - Barbearia Amorim"
git branch -M main
git remote add origin https://github.com/teu-user/barbearia-amorim.git
git push -u origin main
```
3. Netlify → "New site from Git"
4. Conecta o repositório
5. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Configurações Netlify Recomendadas

**netlify.toml** (cria este ficheiro na raiz):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.jpg"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.png"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🔧 Configuração de Domínio

1. **Netlify Domain**: `barbearia-amorim.netlify.app` (grátis)
2. **Custom Domain** (se tiveres):
   - Netlify → Domain settings → Add custom domain
   - Adiciona DNS records no teu registrar:
     - Type: `A` → Value: `75.2.60.5`
     - Type: `CNAME` → Name: `www` → Value: `barbearia-amorim.netlify.app`
   - Netlify ativa HTTPS automático (Let's Encrypt)

## 📊 Google Analytics (Opcional)

1. Cria conta: https://analytics.google.com
2. Cria propriedade "Barbearia Amorim"
3. Copia o ID de medição (G-XXXXXXXXXX)
4. Descomenta o código no `index.html` (linhas 174-181)
5. Substitui `G-XXXXXXXXXX` pelo teu ID

## 🔍 Google Search Console

Para aparecer no Google:

1. Vai a https://search.google.com/search-console
2. Adiciona propriedade: `https://barbeariaamorim.pt` (ou o teu domínio)
3. Verifica ownership (HTML tag ou DNS)
4. Submit sitemap: `https://barbeariaamorim.pt/sitemap.xml` (criar depois)

### Criar Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://barbeariaamorim.pt/</loc>
    <lastmod>2026-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📈 Próximos Passos Recomendados

### Curto Prazo
- [ ] Deploy na Netlify
- [ ] Testar em diferentes dispositivos
- [ ] Configurar Google Analytics
- [ ] Adicionar Google Search Console
- [ ] Testar velocidade: https://pagespeed.web.dev

### Médio Prazo
- [ ] Substituir Instagram feed placeholders por imagens reais
- [ ] Adicionar mais fotos de cortes no portfolio
- [ ] Criar página de política de privacidade
- [ ] Configurar formulário de contacto (Netlify Forms)
- [ ] Adicionar chat (ex: Tawk.to)

### Longo Prazo
- [ ] Blog com dicas de grooming
- [ ] Sistema de agendamento integrado
- [ ] Programa de fidelização
- [ ] Reviews automáticos (Google Reviews API)

## 🐛 Troubleshooting

**Site não carrega no Netlify:**
- Verifica se `npm run build` funciona localmente
- Confirma que a pasta `dist` existe após build

**Imagens não aparecem:**
- Verifica URLs do Cloudinary
- Testa URLs diretamente no browser

**Performance baixa:**
- Usa Lighthouse do Chrome DevTools
- Verifica se as otimizações Cloudinary estão ativas
- Reduz tamanho do vídeo se necessário

## 📞 Suporte

Questões técnicas ou bugs? Contacta o desenvolvedor.

---

**Desenvolvido com ❤️ para Barbearia Amorim**
