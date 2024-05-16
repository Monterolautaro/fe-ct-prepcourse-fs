function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var NuevoArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      NuevoArray.push(array[i]);
    }
  }
  return NuevoArray;
}
module.exports = filtrarNumerosPares;
