function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var NuevoArray = [];
  for(var i = 0 ; i < array.length ; i++){
    NuevoArray.push(array[i].toUpperCase());
  }
  return NuevoArray;
}

module.exports = convertirStringAMayusculas;
