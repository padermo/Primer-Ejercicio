"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let contador = 0;
  for(let i=0; i<num.length; i++){
    //tomamos la posision del numero y lo multiplicamos por 2, luego lo elevamos y disminuimos el exponente
    contador += num[i] * 2 ** (num.length -1 -i); 
  }
  return contador;
}

function DecimalABinario(num) {
  // tu codigo aca
  let contador = "";
  while(num>0){
    //guarda el resto en contador y lo agrega de izquierda a derecha
    contador = (num%2) + contador;
    //dividimos el numero en 2 y aplicamos floor para obtener su entero
    num = Math.floor(num / 2); 
  }
  return contador;
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
