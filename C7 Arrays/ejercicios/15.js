function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var maximo = array[0];
  var indiceMaximo = 0;
  for(var i = 1; i < array.length; i++){
    if(array[i] > maximo){
      maximo = array[i];
      indiceMaximo = i;
    }
  }
  return indiceMaximo;
  }
console.log(encontrarIndiceMayor([1, 2, 3, 4, 5, 6, 7, 8]))
module.exports = encontrarIndiceMayor;
