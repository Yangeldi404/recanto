/*
   JAVASCRIPT DO SITE

   Este arquivo cuida dos comportamentos
   extras da página.
*/

document.addEventListener("DOMContentLoaded", function () {
/* ============================================================
   CARROSSEL INFINITO — NOSSA EQUIPE
============================================================ */

const teamTrack = document.querySelector(".team-track");

if (teamTrack) {

    /*
       Pega todos os cards originais
    */

    const originalCards = Array.from(
        teamTrack.querySelectorAll(".team-card")
    );


    /*
       Duplica todos os cards.

       Assim temos:

       1 2 3 4 5 6 7
       1 2 3 4 5 6 7

       Quando a primeira sequência terminar,
       a segunda já estará exatamente no mesmo lugar,
       criando o efeito infinito.
    */

    originalCards.forEach(function (card) {

        const clone = card.cloneNode(true);

        clone.setAttribute(
            "aria-hidden",
            "true"
        );

        teamTrack.appendChild(clone);

    });

}

    /* ============================================================
       READ MORE INFO — INSTAGRAM
    ============================================================ */

    const readMore =
        document.querySelector(".read-more-toggle");

    const instagramText =
        document.querySelector(".instagram-box p");


    if (readMore && instagramText) {

        readMore.addEventListener("click", function () {

            instagramText.style.display = "block";

            instagramText.style.webkitLineClamp = "unset";

            instagramText.style.maxWidth = "420px";

            readMore.style.display = "none";
        });
    }


    /* ============================================================
       BARRA DE PROGRESSO DOS DEPOIMENTOS
    ============================================================ */

    document.querySelectorAll(".video-card").forEach(function (card) {

        const bar = card.querySelector(".progress");

        if (bar) {

            bar.style.background =
                "linear-gradient(90deg, var(--red) 0%, #eee 0%)";
        }

    });

});
