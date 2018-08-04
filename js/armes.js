
function chgtArme(arme){
    var ancienneArme = persoActif.arme;
    var nouvelleArme = arme;
        
    persoActif.arme = nouvelleArme;
    
    map[persoActif.positionX][persoActif.positionY].arme = ancienneArme;
    
    var x
    if(persoActif === pers1){
        x = 1
    }
    else{
        x=2
    }
    
    $(function () {
            
        $('#imgArme'+x).css('background-image','url("'+nouvelleArme.url+'")');
        $('#nomArme'+x).text(nouvelleArme.texte);
        $('#degatArme'+x).text(String(nouvelleArme.degat));
        
    
        $('#'+nouvelleArme.nom).css('background-image','url("'+ancienneArme.url+'")');
        $('#'+nouvelleArme.nom).attr('id',ancienneArme.nom);
        
    });
        
};







function testPresenceArme() {
    var x = persoActif.positionX;
    var y = persoActif.positionY;

    var arme = map[x][y].arme


    if (arme !== "") {
        
        $(function () {
            $('body').off('keydown');
            $('#imgInfoArme').attr('src', arme.url);
            document.getElementById('imgInfoArme').setAttribute('src',arme.url);
            $('#nomInfoArme').text(arme.texte);
            $('#forceInfoArme').text(arme.degat);

            function animationInfoEntree() {
                $('#espaceInfo').animate({
                    left: '100px',
                    width: '645px'
                }, 1000);
                $('#chgtArme').show(1000);


            }
            
            function animationInfoSortie(){
                $('#espaceInfo').animate({
                    left: '745px',
                    width: '0px'
                }, 1000);
                $('#chgtArme').hide(1000,function(){
                    decompte();
                });
                
            }
            
            setTimeout(animationInfoEntree, 1000);
            
            
            $('#ouiBtArme').click(function(){
                chgtArme(persoActif,arme);
                animationInfoSortie();
            
                                
            });
            
            $('#nonBtArme').click(function(){
                animationInfoSortie();
                
                
            });
            
            

        });
        
    }
    else{setTimeout(decompte,1500)}




}
