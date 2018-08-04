


function activeBtNon() {
    document.getElementById('espaceInfo').classList.remove('visible');
    
    document.getElementById('ouiBtArme').removeEventListener('click',activeBtOui);
    
    document.getElementById('nonBtArme').removeEventListener('click',activeBtNon);
    
    testPresenceAdversaire();

    //document.querySelector("body").addEventListener("keydown", appuiFleches)
}




function activeBtOui() {
    
    var ancienneArme = persoActif.arme;
    var nouvelleArme = map[persoActif.positionX][persoActif.positionY].arme;

    persoActif.arme = nouvelleArme;

    map[persoActif.positionX][persoActif.positionY].arme = ancienneArme;

    var a
    if (persoActif === pers1) {
        a = 1
    } else {
        a = 2
    }

    //modification de la box de présentation concernant le personnage
    document.getElementById('imgArme' + a).style.backgroundImage = 'url("' + nouvelleArme.url + '")';

    document.getElementById('nomArme' + a).textContent = nouvelleArme.texte;

    document.getElementById('degatArme' + a).textContent = String(nouvelleArme.degat);

    //modifie l'id et l'image de l'arme qui est redéposé sur la map.
    document.getElementById(nouvelleArme.nom).style.backgroundImage = 'url("' + ancienneArme.url + '")';

    document.getElementById(nouvelleArme.nom).setAttribute('id', ancienneArme.nom);

    //fait disparaitre l'espace info et réactive les fleches
    document.getElementById('espaceInfo').classList.remove('visible');
    
    document.getElementById('ouiBtArme').removeEventListener('click',activeBtOui);
    
    document.getElementById('nonBtArme').removeEventListener('click',activeBtNon);
    
    nbCoup = 3;
    
    
    testPresenceAdversaire();
    
    //document.querySelector("body").addEventListener("keydown", appuiFleches);




}


function testPresenceArme() {

    var arme = map[persoActif.positionX][persoActif.positionY].arme;



    if (arme !== "") {
        document.getElementById('imgInfoArme').setAttribute('src', arme.url);

        document.getElementById('nomInfoArme').textContent = arme.texte;

        document.getElementById('forceInfoArme').textContent = arme.degat;

        document.getElementById('espaceInfo').classList.add('visible');

        document.getElementById('nonBtArme').addEventListener('click', activeBtNon);

        document.getElementById('ouiBtArme').addEventListener('click', activeBtOui);



    } else {
        
        testPresenceAdversaire();
        //document.querySelector("body").addEventListener("keydown", appuiFleches);
    }




}