$(document).ready(function(){
    
    $('#geneButton').click(function (){
        pulisci();
        var arrayClasse = geneClasse();
        var classe = arrayClasse[0];
        var carr = geneCarr();
        var razza = geneRazza();
        var oro = arrayClasse[1];
        var alli = geneAlli();

        $('#classe').append(classe);
        $('#carr').append(carr);
        $('#razza').append(razza);
        $('#oro').append(oro+' Monete');
        $('#alli').append(alli);
    })

    function geneClasse() {
        var seed=Math.floor((Math.random() * 11) + 1); //la scelta avviene tra le 11 classi base
        var classe;
        var oro=0;
        switch (seed) {
            case 1:
                classe = 'Barbaro';
                for(var i=0;i<3;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 2:
                classe = 'Bardo';
                for(var i=0;i<3;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 3:
                classe = 'Chierico';
                for(var i=0;i<4;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 4:
                classe = 'Druido';
                for(var i=0;i<2;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 5:
                classe = 'Guerriero';
                for(var i=0;i<5;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 6:
                classe = 'Ladro';
                for(var i=0;i<4;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 7:
                classe = 'Mago';
                for(var i=0;i<2;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 8:
                classe = 'Monaco';
                for(var i=0;i<1;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 9:
                classe = 'Paladino';
                for(var i=0;i<5;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 10:
                classe = 'Ranger';
                for(var i=0;i<5;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            case 11:
                classe = 'Stregone';
                for(var i=0;i<2;i++){
                    var roll=Math.floor((Math.random() * 6) + 1); 
                    oro += roll;
                }
                oro *= 10; 
                break;
            default:
                classe = 'Problema nella generazioen della classe';
                break;
        }
    return [classe,oro];
    }

    function geneCarr() {
        var carr;
        var forz=0;
        var des=0;
        var cos=0;
        var int=0;
        var sag=0;
        var car=0;
        var min=6;

        for(var i=0;i<4;i++){
            var roll=Math.floor((Math.random() * 6) + 1); 
            if (roll < min) {
                min = roll;
            }
            forz += roll;
        }
        forz -= min;
        min = 6;

        for(var i=0;i<4;i++){
            var roll=Math.floor((Math.random() * 6) + 1); 
            if (roll < min) {
                min = roll;
            }
            des += roll;
        }
        des -= min;
        min = 6;

        for(var i=0;i<4;i++){
            var roll=Math.floor((Math.random() * 6) + 1); 
            if (roll < min) {
                min = roll;
            }
            cos += roll;
        }
        cos -= min;
        min = 6;

        for(var i=0;i<4;i++){
            var roll=Math.floor((Math.random() * 6) + 1); 
            if (roll < min) {
                min = roll;
            }
            int += roll;
        }
        int -= min;
        min = 6;

        for(var i=0;i<4;i++){
            var roll=Math.floor((Math.random() * 6) + 1); 
            if (roll < min) {
                min = roll;
            }
            sag += roll;
        }
        sag -= min;
        min = 6;

        for(var i=0;i<4;i++){
            var roll=Math.floor((Math.random() * 6) + 1); 
            if (roll < min) {
                min = roll;
            }
            car += roll;
        }
        car -= min;

        var carr='Forza: '+forz+'  Destrezza: '+des+'  Costituzione: '+cos+'  Intelligenza: '+int+'  Saggezza: '+sag+'  Carisma: '+car;
        return carr;
    }

    function geneRazza() {
        var seed = Math.floor((Math.random() * 23) + 1); //la scelta avviene tra le 11 classi base
        var razza;
        switch (seed) {
            case 1:
                razza = 'Elfo';
                break;
            case 2:
                razza = 'Gnomo';
                break;
            case 3:
                razza = 'Halfling';
                break;
            case 4:
                razza = 'Mezzelfo';
                break;
            case 5:
                razza = 'Mezzorco';
                break;
            case 6:
                razza = 'Nano';
                break;
            case 7:
                razza = 'Umano';
                break;
            case 8:
                razza = 'Aasimar';
                break;
            case 9:
                razza = 'Coboldo';
                break;
            case 10:
                razza = 'Dhampir';
                break;
            case 11:
                razza = 'Drow';
                break;
            case 12:
                razza = 'Felinide';
                break;
            case 13:
                razza = 'Ghermito';
                break;
            case 14:
                razza = 'Goblin';
                break;
            case 15:
                razza = 'Hobgoblin';
                break;
            case 16:
                razza = 'Ifrit';
                break;
            case 17:
                razza = 'Ondine';
                break;
            case 18:
                razza = 'Orco';
                break;
            case 19:
                razza = 'Oreade';
                break;
            case 20:
                razza = 'Rattoide';
                break;
            case 21:
                razza = 'Silfide';
                break;
            case 22:
                razza = 'Tengu';
                break;
            case 23:
                razza = 'Tiefling';
                break;
            default:
                razza = 'Problema nella generazioen della razza';
                break;
        }
        return razza;
    }

    function geneAlli() {
        var alli;
        var seed = Math.floor((Math.random() * 9) + 1);
        switch (seed) {
            case 1:
                alli = 'Legale Buono';
                break;
            case 2:
                alli = 'Neutrale Buono';
                break;
            case 3:
                alli = 'Caotico Buono';
                break;
            case 4:
                alli = 'Legale Neutrale';
                break;
            case 5:
                alli = 'Neutralissimo';
                break;
            case 6:
                alli = 'Caotico Neutrale';
                break;
            case 7:
                alli = 'Legale Malvagio';
                break;
            case 8:
                alli = 'Neutrale Malvagio';
                break;
            case 9:
                alli = 'Caotico Malvagio';
                break;
            default:
                alli = 'Problema nella generazioen dell\'allineamento';
                break;
        }
        return alli;
    }
    
    function pulisci(){
        $('#classe').contents().remove();
        $('#carr').contents().remove();
        $('#razza').contents().remove();
        $('#oro').contents().remove();
        $('#alli').contents().remove();
    }
})