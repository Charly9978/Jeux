


function activeBtNon() {
    document.getElementById('espaceInfo').classList.remove('visible');
    
    document.getElementById('ouiBtArme').removeEventListener('click',activeBtOui);
    
    document.getElementById('nonBtArme').removeEventListener('click',activeBtNon);
    
    resolve();
    //return;
}




function activeBtOui() {

    persoActif.changeArme();

    //fait disparaitre l'espace info et réactive les fleches
    document.getElementById('espaceInfo').classList.remove('visible');
    
    document.getElementById('ouiBtArme').removeEventListener('click',activeBtOui);
    
    document.getElementById('nonBtArme').removeEventListener('click',activeBtNon);
    
    //nbCoup = 3;
    
    resolve();
    //return;
}


function testPresenceArme() {

   return new Promise((resolve)=>{

        let arme = map[persoActif.positionX][persoActif.positionY].arme;

        if (arme !== "") {
            document.getElementById('imgInfoArme').setAttribute('src', arme.url);
    
            document.getElementById('nomInfoArme').textContent = arme.texte;
    
            document.getElementById('forceInfoArme').textContent = arme.degat;
    
            document.getElementById('espaceInfo').classList.add('visible');
    
            document.getElementById('nonBtArme').addEventListener('click', activeBtNon);
    
            document.getElementById('ouiBtArme').addEventListener('click', activeBtOui);
    
    
    
        } else {
            
            resolve();
           // return
        }

    })
}