# Operação Bolo — site da amizade 🎂

Site estático pronto para GitHub Pages ou Vercel. **Não precisa instalar nada**, nem criar conta, nem usar backend.

## Testar
Abra `index.html` no navegador. Para testar com servidor local, execute `python -m http.server 8000` nesta pasta e abra `http://localhost:8000`.

## Colocar fotos reais
1. Salve as fotos em `assets/fotos/`, em JPG, PNG ou WebP (recomendado: imagens quadradas, de 300 a 600 pixels de largura, arquivos leves).
2. Abra `config.js` e troque os nomes e os caminhos do array `amigos`. A ordem define apenas a apresentação das opções; ela escolhe a ordem dos personagens no bolo.
3. Você pode adicionar ou remover personagens: o jogo atualiza automaticamente a quantidade necessária para finalizar. Para 6 toppers, use 6 fotos.
4. Opcional: coloque a foto do bolo original como `assets/fotos/bolo-original.jpg`. Ela está reservada no `config.js` para uso como referência em futuras personalizações; a versão atual não a exibe automaticamente.
5. Sem fotos, aparecem círculos com as iniciais; assim é possível testar a experiência antes de personalizar.

**Privacidade:** todas as fotos são carregadas localmente pelo navegador a partir do próprio site. Se o repositório do GitHub Pages for público, as imagens do repositório também estarão disponíveis publicamente. Peça autorização às pessoas retratadas antes de publicar.

## Publicar grátis no GitHub Pages
1. Crie um repositório no GitHub (ex.: `operacao-bolo`).
2. Envie `index.html`, `style.css`, `script.js`, `config.js` e a pasta `assets/` mantendo os caminhos.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, selecione `main` e `/ (root)`, depois salve.
4. O endereço costuma ficar `https://SEU-USUARIO.github.io/operacao-bolo/`.

## Publicar na Vercel
1. Importe o repositório GitHub na Vercel ou use a opção de deploy de projeto estático.
2. Framework: **Other**, build command: **vazio**, output directory: **vazio/raiz**.
3. Publique e compartilhe o link gerado.

## O que funciona
- 3 telas: desculpas, minijogo e conclusão.
- 5 etapas de confeitaria: massa, recheio, cobertura, decoração e amigos.
- Seleção por clique/toque; drag-and-drop em navegadores compatíveis com arraste HTML5.
- Bolo renderizado em CSS que muda conforme as escolhas.
- Toppers com foto real ou iniciais como fallback.
- Progresso, botões condicionados à conclusão, recomeço, confetes e pequenas mensagens.
- Layout responsivo e respeita `prefers-reduced-motion`.

## Organização
- `index.html`: estrutura e textos da experiência.
- `style.css`: visual e animações.
- `script.js`: lógica do jogo.
- `config.js`: nomes e caminhos das fotos.
- `assets/fotos/`: fotos pessoais (vazia nesta entrega).

## Nota
O design usa fontes do Google Fonts quando há acesso à rede; sem internet, carrega fontes locais de fallback. Não existem rastreadores nem dependências JavaScript externas.
