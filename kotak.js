
function kotak4(rows){
    var bantu = '';

    for(var i = rows; i >= 1; i--){
        for(var j = 1; j <= i; j++){
            bantu += j;
        }
        bantu += '\n'; 
    }
    console.log(bantu);
}


kotak4(6);