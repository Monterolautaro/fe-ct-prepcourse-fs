function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multiplicados = [];

  for(var i = 0; i < array.length; i++){
    multiplicados.push(array[i] * i);
    }
  return multiplicados;
}

module.exports = multiplicarElementosPorIndice;