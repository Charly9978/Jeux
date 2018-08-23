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

    animationPerso(direction)
    .then(testPresenceArme())
    .then(testPresenceAdversaire());

}


function animationPerso(direction) {
 return new Promise((resolve)=>{

    var divPerso = document.getElementById(persoActif.nom);
    var posX = persoActif.positionX * 75;
    var posY = persoActif.positionY * 75;
    var nbAnim = 1;
    switch(direction){
        case "UP":
        var pos = posY;
        var a =  -1;
        var dir = "TOP";
        break
        case "DOWN":
        var pos = posY;
        var a =  1;
        var dir = "TOP";
        break;
        case "RIGHT":
        var pos = posX;
        var a =  1;
        var dir = "LEFT";
        break;
        case"LEFT":
        var pos = posY;
        var a =  -1;
        var dir = "LEFT";
        break;
    }
    let id = setInterval(()=>{
        if (nbAnim == 10) {
            clearInterval(id);
       
            divPerso.style.backgroundImage = 'url("../image/personnage/' + persoActif.dossierImg + '/' + direction + '1.png")';

            persoActif.move(direction);

            resolve();

        } else {

            divPerso.style.backgroundImage = 'url("../image/personnage/' + persoActif.dossierImg + '/' + direction + nbAnim + '.png")';

            if (nbAnim % 2 === 0) {
                var nbPx = 8;
            } else {
                var nbPx = 7;
            }
            pos += (nbPx*a);
            divPerso.style[dir] = pos + 'px';

            nbAnim++;
        }

    }, 100);

})



}


document.querySelector("body").addEventListener("keydown", appuiFleches);