# Operação Bolo — nossa história

Site estático para GitHub Pages ou Vercel. HTML, CSS e JavaScript, sem servidor.

## O que mudou

O jogo mantém massa, recheio, cobertura e decoração. Na etapa 5, em vez de adicionar vários amigos, a pessoa revela uma galeria de memórias dos dois. Duas fotos (uma de cada pessoa) aparecem sobre o bolo como toppers. Ao concluir, a galeria completa aparece abaixo da mensagem final.

## Como adicionar suas fotos

1. Abra `assets/fotos` no repositório GitHub, escolha **Add file > Upload files**, envie as fotos e confirme em **Commit changes**.
2. Separe duas fotos individuais (por exemplo, `ela.jpg` e `eu.jpg`) para os dois toppers.
3. Para a retrospectiva, use `memoria-01.jpg`, `memoria-02.jpg`, ... até `memoria-20.jpg` (ou outro número).
4. Em `config.js`, personalize `pessoas` e `lembrancas`. A configuração inicial gera automaticamente 20 posições numeradas. **Se quiser 25, altere `length: 20` para `length: 25`**. Se quiser legendas próprias, substitua a lista gerada por objetos `{ foto: 'assets/fotos/arquivo.jpg', legenda: 'Nossa foto na escola' }`.
5. Confira se o nome e a extensão `.jpg`, `.png` ou `.webp` coincidem exatamente com o arquivo no GitHub (maiúsculas e minúsculas importam).
6. Fotos ausentes aparecem como ícones provisórios; você pode testar antes de enviar todas.

Para publicar: no repositório, vá em **Settings > Pages > Build and deployment > Deploy from a branch**, escolha a branch principal e a pasta `/ (root)` e salve. Se os arquivos estiverem dentro de `bolo-da-amizade`, mova o conteúdo dessa pasta para a raiz do repositório (ou use outra configuração de publicação).

**Privacidade:** GitHub Pages público expõe as fotos para qualquer pessoa com acesso ao endereço. Confirme que ambos concordam com a publicação.
