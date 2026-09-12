/*

   JAVASCRIPT DO SITE

*/

document.addEventListener('DOMContentLoaded', function () {

  /*
     "READ MORE INFO" DO INSTAGRAM

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

  */

  document.querySelectorAll('.video-card').forEach(function (card) {
    var bar = card.querySelector('.progress');
    if (bar) {
      bar.style.background =
        'linear-gradient(90deg, var(--red) 0%, #eee 0%)';
    }
  });

});
