function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  
  var multiplicando = 6;
  
  var multiplicador = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  var resultado = [];
  
  for(var i = 0; i < multiplicador.length; i++){
    resultado.push(multiplicando*multiplicador[i]);
  }
  return resultado
}
module.exports = tablaDelSeis;
