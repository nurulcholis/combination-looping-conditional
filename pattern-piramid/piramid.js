function piramid(num){
    var bantu = '';
    for(var i = 1; i < num; i++){
        for(var j = num-1; j >= i; j--){
            bantu += ' ';
        }

        for(var k = 1; k < i*2; k++){
            bantu += '*';
        }
        bantu += '\n';
    }

    for(var i = num; i > 0; i--){
        for(var j = num; j > i; j--){
            bantu += ' ';
        }

        for(var k = 1; k < i*2; k++){
            bantu += '*';
        }
        bantu += '\n';
    }

    console.log(bantu);
} 

piramid(10);