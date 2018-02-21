$(document).ready(function(){
    
    $('#geneButton').click(function (){
        pulisci();
        var classe = geneClasse();
        var carr = geneCarr();

        $('#classe').append(classe);
        $('#carr').append(carr);
    })

    function geneClasse() {
        var seed=Math.floor((Math.random() * 11) + 1); //la scelta avviene tra le 11 classi base
        var classe;
        switch (seed) {
            case 1:
                classe = 'Barbaro';
                break;
            case 2:
                classe = 'Bardo';
                break;
            case 3:
                classe = 'Chierico';
                break;
            case 4:
                classe = 'Druido';
                break;
            case 5:
                classe = 'Guerriero';
                break;
            case 6:
                classe = 'Ladro';
                break;
            case 7:
                classe = 'Mago';
                break;
            case 8:
                classe = 'Monaco';
                break;
            case 9:
                classe = 'Paladino';
                break;
            case 10:
                classe = 'Ranger';
                break;
            case 11:
                classe = 'Stregone';
                break;
            default:
                classe = 'Problema nella generazioen della classe';
        }
    return classe;
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

    function pulisci(){
        $('#classe').contents().remove();
        $('#carr').contents().remove();
    }
})