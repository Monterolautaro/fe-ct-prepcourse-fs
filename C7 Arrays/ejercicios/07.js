function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
   array.sort(function(a, b){
    return a - b;
   });
   return array;
}
console.log(ordenarArray([2, 5, 3, 22, 10, 8]))

module.exports = ordenarArray;
