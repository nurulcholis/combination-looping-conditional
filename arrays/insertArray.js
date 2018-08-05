var rows = 3;
var cols = 2;
var matriks = [];

for(var i = 0; i < rows; i++) {
  matriks[i] = [];
  for(var j = 0; j < cols; j++) {
    matriks[i][j] = 0;
  } 
}

function add(n){
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      matriks[i][j] += n;
    } 
  }
}

function times(n){
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      matriks[i][j] *= n;
    } 
  }
}

add(2);
