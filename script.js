/*

   JAVASCRIPT DO SITE

   Este arquivo cuida de pequenos comportamentos
   da página. O site funciona normalmente mesmo
   sem JavaScript — este arquivo só adiciona
   detalhes extras.

*/

document.addEventListener('DOMContentLoaded', function () {

  /*
     "READ MORE INFO" DO INSTAGRAM

     Quando a pessoa clicar no texto "read more info",
     o texto da publicação passa a mostrar tudo,
     em vez de ficar cortado.

     Para isso funcionar, o texto completo do post
     deve estar dentro do <p> da .instagram-box no HTML.
  */

  var readMore = document.querySelector('.read-more-toggle');
  var instagramText = document.querySelector('.instagram-box p');

  if (readMore && instagramText) {
    readMore.addEventListener('click', function () {
      instagramText.style.display = 'block';
      instagramText.style.webkitLineClamp = 'unset';
      instagramText.style.maxWidth = '420px';
      readMore.style.display = 'none';
    });
  }


  /*
     BARRA DE PROGRESSO DOS DEPOIMENTOS

     Preenche a barrinha cinza (.progress) com uma cor,
     apenas para dar a ideia visual de "vídeo assistido".

     Isso é só decorativo: não reproduz nenhum vídeo real.
     Se no futuro os cards de depoimento ganharem um
     <video> de verdade, esta parte pode ser substituída.
  */

  document.querySelectorAll('.video-card').forEach(function (card) {
    var bar = card.querySelector('.progress');
    if (bar) {
      bar.style.background =
        'linear-gradient(90deg, var(--red) 0%, #eee 0%)';
    }
  });

});
