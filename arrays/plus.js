var rows = 5
var bantu = ''
var median = Math.round(rows/2);


for(var i = 1; i <= rows; i++) {
  for(var j = 1; j <= rows; j++){
    if(i == median || j == median){
      bantu += '*'
    }else{
      bantu += ' '
    }
  }
  bantu += '\n';
}

console.log(bantu)