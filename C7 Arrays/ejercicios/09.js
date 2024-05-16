function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var Arreglo = Math.floor(Math.random() * array.length)
   return array[Arreglo]
}
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5, 6, 7, 8]))
module.exports = obtenerElementoAleatorio;
