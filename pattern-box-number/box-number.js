function kotak(cols){
    var bantu = '';
    
    for(var i = 1; i <= cols; i++){
        bantu += i;
    }

    for(i = 1; i <= cols; i++){
        console.log(bantu);
    }
}

kotak(5);