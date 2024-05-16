function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var NuevoArray = []
  for(var i = 0; i < array.length; i++){
      NuevoArray.push(array[i] * 2);  
    }
  return NuevoArray;
}

console.log(duplicarElementos([2, 4, 6, 8, 10]))

module.exports = duplicarElementos;
