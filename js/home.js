/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
// const scrollReveal = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700,
//   reset: true
// })

// scrollReveal.reveal(
//   `#home .text, #home .botao,
//   #about .image, #about .text, #about .botao,
//   #projects .text, #projects .swiper-container,
//   #skills .text, #skills .card,
//   #contact .text, #contact .title, #contact p, #contact .carta,
//   #form .text, #form .container, #form #idNome, #form #idTel, #form #idEmail,
//   #form #idAssunto, #form #idAssunto, #form #idTexto, #form .opcao, #form .botaoForm,
//   footer #linha, footer.descricao`,
//   { interval: 100 }
// )

/* Quando der Scroll */
window.addEventListener('scroll', function () {
  backToTop()
})