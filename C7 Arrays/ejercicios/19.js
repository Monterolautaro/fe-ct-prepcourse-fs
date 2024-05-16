function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

if(arguments.length < 1){
  return 0;
}
if(arguments.length === 1){
  return arguments;
}

var resultado = 1;

for(var i = 0; i < arguments.length; i++){
    resultado *= arguments[i];
}
  return resultado;
}

console.log(multiplicarArgumentos(2, 2, 3))

module.exports = multiplicarArgumentos;
