/*

vérifier la présence de persoInactif dans une case à proximite

lancer le combat

c'est le combattant qui était actif qui commence l'attaque sauf si il atteint son adversaire lors de sa troisième avancé. Dans ce cas c'est le combattant inactif qui attaque le premier

chaque joueur tape un coup
puissance du coup est égale à un chiffre au hasard entre 0 et 1, multiplier par la force de l'arme.

la puissance du coup est annoncé à l'adversaire

l'adversaire peut choisir soit de contre attaquer soit de se défendre.

si il décide de contre-attaquer il perd un nombre de point de vie égale à la force du coup mais peut, au coup suivant, à son tour attaquer.

si il décide de se défendre la puissance du coup est divisée par deux, il perd donc moins de point de vie mais subi une seconde attaque ensuite.

Le combattant qui perd tous ses points de vie perd le combat.

*/

var attaquant = '';
var defenseur = '';
var forceCoup = '';

function testPresenceAdversaire() {
    if (persoActif.positionY !== 0) {
        var adversaireTop = map[persoActif.positionX][persoActif.positionY - 1].personnage;
    }
    if (persoActif.positionY !== 9) {
        var adversaireBas = map[persoActif.positionX][persoActif.positionY + 1].personnage;
    }
    if (persoActif.positionX !== 0) {
        var adversaireGauche = map[persoActif.positionX - 1][persoActif.positionY].personnage;
    }
    if (persoActif.positionX !== 9) {
        var adversaireDroite = map[persoActif.positionX + 1][persoActif.positionY].personnage;
    }

    if (adversaireTop === persoInactif || adversaireBas === persoInactif || adversaireDroite === persoInactif || adversaireGauche === persoInactif) {
        combat();
    } else {

        document.querySelector("body").addEventListener("keydown", appuiFleches);
        //reactive les fleches
    }
}

function attaque() {

    forceCoup = Math.floor(Math.random() * attaquant.arme.degat);

    document.getElementById("box" + attaquant.dossierImg).style.border = 'red solid 6px';

    document.getElementById("box" + defenseur.dossierImg).style.border = 'grey solid 2px';

    document.getElementById('imgPersoCombat').src = "../image/personnage/" + attaquant.dossierImg + "/face.png";

    document.getElementById('defense').style.display = 'none';

    document.getElementById('attaque').style.display = 'block';

    document.querySelector('.attaquant').textContent = attaquant.nom;


    document.querySelector('.puissance').textContent = forceCoup;

    document.getElementById('espaceInfo').classList.add('visible');

    setTimeout(defense, 3500);


}

function defense() {

    document.getElementById('imgPersoCombat').src = "../image/personnage/" + defenseur.dossierImg + "/face.png";

    document.querySelector('.defenseur').textContent = defenseur.nom;

    document.getElementById("box" + defenseur.dossierImg).style.border = 'red solid 6px';

    document.getElementById("box" + attaquant.dossierImg).style.border = 'grey solid 2px';

    document.getElementById('attaque').style.display = 'none';

    document.getElementById('defense').style.display = 'block';

    document.getElementById('ctrAttaqueBt').addEventListener('click', appuiBt);

    document.getElementById('defendreBt').addEventListener('click', appuiBt);


}


function appuiBt() {

    var ptDeVie = defenseur.ptVie;

    if (this.id === 'ctrAttaqueBt') {
        var nvPtDeVie = ptDeVie - forceCoup;
    } else {
        var nvPtDeVie = ptDeVie - forceCoup / 3;
    }

    if (nvPtDeVie <= 0) {

        defenseur.ptVie = 0;
        document.getElementById('barreRouge' + defenseur.dossierImg).style.width = 0 + '%';

        document.getElementById('imgPersoCombat').src = "../image/personnage/" + attaquant.dossierImg + "/face.png";

        document.getElementById("box" + attaquant.dossierImg).style.border = 'red solid 6px';

        document.getElementById("box" + defenseur.dossierImg).style.border = 'grey solid 2px';

        document.querySelector('#victoire .attaquant').textContent = attaquant.nom;

        document.getElementById('defense').style.display = 'none';
        document.getElementById('victoire').style.display = 'block';



    } else {

        defenseur.ptVie = nvPtDeVie;

        document.getElementById('barreRouge' + defenseur.dossierImg).style.width = nvPtDeVie + '%';

        if (this.id === 'ctrAttaqueBt') {

            var d = attaquant;
            attaquant = defenseur;
            defenseur = d;
        }

        document.getElementById('ctrAttaqueBt').removeEventListener('click', appuiBt);
        document.getElementById('defendreBt').removeEventListener('click', appuiBt);



        attaque();

    }

}


function combat() {

    document.getElementById('chgtArme').style.display = "none";

    document.getElementById('combat').style.display = 'block';


    if (nbCoup === 3) {
        attaquant = persoInactif;
        defenseur = persoActif;
    } else {
        attaquant = persoActif;
        defenseur = persoInactif;
    }

    attaque();









}