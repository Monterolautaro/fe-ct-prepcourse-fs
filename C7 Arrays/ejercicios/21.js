function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesBien = [];
  var mesesBuscados = ["Enero", "Marzo", "Noviembre"];

 for(var i = 0; i < array.length; i++){
  if(mesesBuscados.includes(array[i])){
    mesesBien.push(array[i])
  }
 }
  if(mesesBien.includes("Enero") && mesesBien.includes("Marzo") && mesesBien.includes("Noviembre")){
    return mesesBien
  }else{
    return "No se encontraron los meses pedidos"
  }
}
console.log(mesesDelAño(["Abril", "Mayo", "Enero", "Junio", "Marzo", "Noviembre"]))
module.exports = mesesDelAño;
