$(function () {

     var nbAnim = 1;
    
    

    function animation(perso, direction) {
        $('body').off('keydown');
        nbAnim += 1;
        if (nbAnim === 10) {
            $('#' + perso.div.id).css({
                'background-image': 'url("../image/personnage/' + perso.dossierImg + '/' + direction + '1.png")'
            });
            nbAnim = 1;
            
            $('body').on('keydown', function (e) {
                appuiFleche(e)
            });
        } else {
            $('#' + perso.div.id).css({
                'background-image': 'url("../image/personnage/' + perso.dossierImg + '/' + direction + nbAnim + '.png")'
            }).animate({
                opacity: 1
            }, 150, function () {
                animation(perso, direction)
            })
        }
    };

    

    function appuiFleche(a) {

        if (a.which === 37) {

            if (map[persoActif.positionX][persoActif.positionY].mvtGaucheAutorise) {

                nbCoup += 1
                
                $('#nbMvt' + persoActif.dossierImg).text(nbCoup);

                miseJourPositionPerso(persoActif, "");

                $('#' + persoActif.div.id).animate({
                    left: '-=75'
                }, {
                    queue: false,
                    duration: 1500
                }).animate({
                    opacity: 1
                }, 150, function () {
                    animation(persoActif, "LEFT");
                });
                persoActif.positionX -= 1;
                miseJourPositionPerso(persoActif, persoActif.nom);
                console.log(map);
                testPresenceArme(persoActif);
                

            }
        }

        if (a.which === 38) {

            if (map[persoActif.positionX][persoActif.positionY].mvtHautAutorise) {

                nbCoup += 1
                
                $('#nbMvt' + persoActif.dossierImg).text(nbCoup);

                miseJourPositionPerso(persoActif, "");

                $('#' + persoActif.div.id).animate({
                    top: '-=75'
                }, {
                    queue: false,
                    duration: 1500
                }).animate({
                    opacity: 1
                }, 150, function () {
                    animation(persoActif, "UP");
                });

                persoActif.positionY -= 1;
                miseJourPositionPerso(persoActif, persoActif.nom);
                console.log(map);
                testPresenceArme(persoActif);
               
            }
        }

        if (a.which === 39) {

            if (map[persoActif.positionX][persoActif.positionY].mvtDroitAutorise) {
                
                nbCoup += 1
                
                $('#nbMvt' + persoActif.dossierImg).text(nbCoup);

                miseJourPositionPerso(persoActif, "");

                $('#' + persoActif.div.id).animate({
                    left: '+=75'
                }, {
                    queue: false,
                    duration: 1500
                }).animate({
                    opacity: 1
                }, 150, function () {
                    animation(persoActif, "RIGHT");
                });

                persoActif.positionX += 1;
                miseJourPositionPerso(persoActif, persoActif.nom);
                console.log(map);
                testPresenceArme(persoActif);
               

            }
        }

        if (a.which === 40) {

            if (map[persoActif.positionX][persoActif.positionY].mvtBasAutorise) {
                
                nbCoup += 1
                
                $('#nbMvt' + persoActif.dossierImg).text(nbCoup);

                miseJourPositionPerso(persoActif, "");

                $('#' + persoActif.div.id).animate({
                    top: '+=75'
                }, {
                    queue: false,
                    duration: 1500
                }).animate({
                    opacity: 1
                }, 150, function () {
                    animation(persoActif, "DOWN");
                });

                persoActif.positionY += 1;
                miseJourPositionPerso(persoActif, persoActif.nom);
                console.log(map);
                testPresenceArme(persoActif);
                

            }
        }


    };



    $('body').on('keydown', function (e) {
        appuiFleche(e);
    })

})
