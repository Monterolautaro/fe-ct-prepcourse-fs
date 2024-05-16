function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var totalNotas = 0;
  for(var i = 0; i < resultadosTest.length; i++){
    totalNotas = totalNotas + i;
  }

  var cantidadNotas = resultadosTest.length;

  var resultado = totalNotas/cantidadNotas;

  return resultado;
}

module.exports = promedioResultadosTest;
