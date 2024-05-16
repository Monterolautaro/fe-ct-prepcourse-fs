function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

var numerorecibido = num;
var nuevosValores = [];

for(var i = 0; i < 10; i++){
 numerorecibido += 2;
 nuevosValores.push(numerorecibido);

 if(numerorecibido === i){
  return "Se interrumpio la ejecucion";
 }
}
return nuevosValores;
}

module.exports = breakStatement;
