/*
*
*Creation de la map (array et dom)
*
*/


class Emplacement{
    constructor(){
        this.rocher = false;
        this.arme = "";
        this.personnage = "";
        this.occupation = false;
        this.mvtHautAutorise = true;
        this.mvtBasAutorise = true;
        this.mvtDroitAutorise = true;
        this.mvtGaucheAutorise = true;
    }
}

function creationMap() {
    let map = [];
    for (let i = 0; i < 10; i++) {
        map[i] = [];
        for (let j = 0; j < 10; j++) {
            map[i][j] = new Emplacement();
        }
    }
    for (let i = 0; i < 10; i++) {
        map[i][0].mvtHautAutorise = false;
        map[i][9].mvtBasAutorise = false;
        map[0][i].mvtGaucheAutorise = false;
        map[9][i].mvtDroitAutorise = false;
    }
    return map;
};

var map = creationMap();


/*
*
*Mise en place des rochers sur la map (array et dom)
*
*/


class Rocher{
    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        map[positionX][positionY].rocher = true;
        map[positionX][positionY].occupation = true;
        if (positionX + 1 < 10) {
            map[positionX + 1][positionY].mvtGaucheAutorise = false;
        }
        if (positionX - 1 >= 0) {
            map[positionX - 1][positionY].mvtDroitAutorise = false;
        }
        if (positionY + 1 < 10) {
            map[positionX][positionY + 1].mvtHautAutorise = false;
        }
        if (positionY - 1 >= 0) {
            map[positionX][positionY - 1].mvtBasAutorise = false;
        }
        this.div = document.createElement("div");

        this.div.setAttribute("class", "rocher");
        this.div.style.left = positionX * 75 + "px";
        this.div.style.top = positionY * 75 + "px";
        document.getElementById("map").appendChild(this.div);
    }
}


function creationRocher() {
    let rochers = [];
    let nbRocher = ""
    while (nbRocher < 15 || nbRocher === "") {
        nbRocher = Math.floor((Math.random() * 25));
    }

    for (let i = 0; i < nbRocher; i++) {
        positionX = Math.floor((Math.random() * 10));
        positionY = Math.floor((Math.random() * 10));
        rochers[i] = new Rocher(positionX, positionY);
    }
};

creationRocher();



/*
*
*Mise en place des armes et des personnages (array et dom)
*
*/

class Object{
    constructor(nom,url){
        this.nom = nom;
        this.url = url;
    }
    positionnementInitial(){
        do {
            var x = Math.floor((Math.random() * 10));
            var y = Math.floor((Math.random() * 10));
    
        } while (map[x][y].occupation === true || map[x][y].personnage !== "");
    
        this.positionX = x;
        this.positionY = y;
    
        map[x][y].occupation = true;
        
        map[x][y][this.type] = this;
    
        this.div = document.createElement("div");
    
        this.div.setAttribute(
            "class", this.type);
        this.div.setAttribute(
            "id", this.nom);
        this.div.style.left = x * 75 + "px";
        this.div.style.top = y * 75 + "px";
        this.div.style.backgroundImage = 'url(' + this.url + ')';
        document.getElementById("map").appendChild(this.div);
    }
}


class Armes extends Object{
    constructor(nom, degat, url, texte){
        super (nom,url);
        this.texte = texte;
        this.degat = degat;
        this.type = "arme";  
    }
}

class Personnage extends Object{
    constructor(nom, url, dossierImg, arme){
        super (nom,url);
        this.ptVie = 100;
        this.arme = arme;
        this.dossierImg = dossierImg;
        this.type = "personnage";
    }
}


var epee = new Armes("epee", 15, "../image/armes/epee.png", "l'épée");
epee.positionnementInitial();

var hache = new Armes("hache", 20, "../image/armes/hache.png", "la hache");
hache.positionnementInitial();

var dbEpee = new Armes("doubleEpee", 30, "../image/armes/doubleEpee.png", "la double épée");
dbEpee.positionnementInitial();

var lance = new Armes("lance", 25, "../image/armes/lance.png", "la lance");
lance.positionnementInitial();

var simpleEpee1 = new Armes("simpleEpee1", 10, "../image/armes/simpleEpee.png", "la simple épée");

var simpleEpee2 = new Armes("simpleEpee2", 10, "../image/armes/simpleEpee.png", "la simple épée")

var pers1 = new Personnage("Goeffroy", "../image/personnage/pers1/DOWN1.png", "pers1", simpleEpee1);
pers1.positionnementInitial();

var pers2 = new Personnage("Jacqouille", "../image/personnage/pers2/DOWN1.png", "pers2", simpleEpee2);
pers2.positionnementInitial();

console.log(map);



function miseJourPositionPerso(mvt) {
    var x = persoActif.positionX;
    var y = persoActif.positionY;
    map[x][y].personnage = "";
    
    if (mvt === "LEFT"){x -= 1}
    
    if (mvt === "UP"){y -= 1}
    
    if (mvt === "RIGHT"){x += 1}
    
    if(mvt === "DOWN"){y += 1}
    
    persoActif.positionX = x;
    persoActif.positionY = y;
    
    map[x][y].personnage = persoActif;
    
    console.log(map);
    
    
};
