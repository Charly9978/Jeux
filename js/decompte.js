function decompte() {

    if (nbCoup >= 3) {
        var a = persoActif;
        persoActif = persoInactif;
        persoInactif = a;
        
        document.getElementById("box" + persoActif.dossierImg).style.border = 'red solid 6px';

        document.getElementById("box" + persoInactif.dossierImg).style.border = 'grey solid 2px';

        nbCoup = 0;

        document.getElementById("nbMvt" + persoInactif.dossierImg).innerHTML = nbCoup;

    };
}