// Uma foto por lembrança. Pode usar 5, 20, 40 ou quantas quiser.
// Envie os arquivos para assets/fotos/ e edite os nomes abaixo.
window.BOLO_CONFIG = {
  pessoas: [
    { nome: 'Ela', foto: 'assets/fotos/ela.jpg', cor: '#f7a6a6' },
    { nome: 'Eu', foto: 'assets/fotos/eu.jpg', cor: '#a9baf2' }
  ],
  lembrancas: Array.from({ length: 20 }, (_, i) => ({
    foto: `assets/fotos/memoria-${String(i + 1).padStart(2, '0')}.jpg`,
    legenda: `Foto ${i + 1}`
  })),
  fotoBoloOriginal: 'assets/fotos/bolo-original.jpg'
};
