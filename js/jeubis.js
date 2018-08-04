var nbCoup = 0;

var persoActif = pers1;

var persoInactif = pers2;

var appuiFleches = function (e) {

    if (e.which === 37 && map[persoActif.positionX][persoActif.positionY].mvtGaucheAutorise) {
        var direction = "LEFT";
    } else if (e.which === 38 && map[persoActif.positionX][persoActif.positionY].mvtHautAutorise) {
        var direction = "UP";
    } else if (e.which === 39 && map[persoActif.positionX][persoActif.positionY].mvtDroitAutorise) {
        var direction = "RIGHT";
    } else if (e.which === 40 && map[persoActif.positionX][persoActif.positionY].mvtBasAutorise) {
        var direction = "DOWN";
    } else {
        return;
    }

    document.querySelector("body").removeEventListener("keydown", appuiFleches);

    nbCoup += 1;
    
    document.getElementById("nbMvt" + persoActif.dossierImg).innerHTML = nbCoup;

    animationPerso(direction);

}


function animationPerso(direction) {


    var divPerso = document.getElementById(persoActif.nom);
    var posX = persoActif.positionX * 75;
    var posY = persoActif.positionY * 75;
    var nbAnim = 1;
    var id = setInterval(frame, 100);


    function frame() {
        if (nbAnim == 10) {
            clearInterval(id);
       

            divPerso.style.backgroundImage = 'url("../image/personnage/' + persoActif.dossierImg + '/' + direction + '1.png")';

            miseJourPositionPerso(direction);

            decompte();
            
            testPresenceArme();
           




        } else {

            divPerso.style.backgroundImage = 'url("../image/personnage/' + persoActif.dossierImg + '/' + direction + nbAnim + '.png")';

            if (nbAnim % 2 === 0) {
                var nbPx = 8;
            } else {
                var nbPx = 7;
            }
            if (direction === "LEFT") {
                posX = posX - nbPx
                divPerso.style.left = posX + 'px';
            }

            if (direction === "RIGHT") {
                posX = posX + nbPx
                divPerso.style.left = posX + 'px';
            }

            if (direction === "DOWN") {
                posY = posY + nbPx
                divPerso.style.top = posY + 'px';
            }

            if (direction === "UP") {
                posY = posY - nbPx
                divPerso.style.top = posY + 'px';
            }

            nbAnim++;
        }
    }
}


document.querySelector("body").addEventListener("keydown", appuiFleches);