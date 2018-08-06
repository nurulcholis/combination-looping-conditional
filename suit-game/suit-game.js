function getComputer(){
    var comp = Math.random(); 

    if(comp < 0.34) return 'gajah';
    
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    
    return 'semut';
    
}

function getPlayer(peran){
    return peran;
}

function result(player, computer){
    if(player === computer){
        return 'Permainan seri';
    }else if(player === 'gajah'){
        if(computer === 'orang'){
            return 'Anda menang:)';
        }else{
            return 'Anda kalah :(';
        }
    }else if(player === 'orang'){
        if(computer === 'gajah'){
            return 'Anda kalah :(';
        }else{
            return 'Anda menang :)';
        }
    }else if(player === 'semut'){
        if(computer === 'orang'){
            return 'Anda kalah :(';
        }else{
            return 'Anda menang :)';
        }
    }
}

var comp = getComputer();
var player = getPlayer('gajah');

console.log('Komputer : ' + comp + ' && Player : ' + player + ' && Hasil : ' + result(player,comp));