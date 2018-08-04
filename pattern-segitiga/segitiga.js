function segitiga(sizing){
    var bantu = '';

    for(var baris = 0; baris <= sizing; baris++){
        for(var spasi = sizing; spasi > baris; spasi--){
            bantu += ' ';
        }
        for(kolom = 0; kolom < (baris * 2)-1; kolom++){
            bantu += '*';
        }
        bantu += '\n';
    }
    console.log(bantu);
}

segitiga(5);