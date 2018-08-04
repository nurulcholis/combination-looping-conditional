function boxHole(num){
    var bantu = '';

    for(var i = 0; i < num; i++){
        for(var j = 0; j < num; j++){
            if(i == 0 || i == num - 1 || j == 0 || j == num - 1){
                bantu += '*';
            }else{
                bantu += ' ';
            }
        }

        bantu += '\n';
    }

    console.log(bantu);
}

boxHole(3);