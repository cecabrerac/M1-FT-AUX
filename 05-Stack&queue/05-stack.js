const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado: raM odaluzA


function efectoEspejo(str){  
//tu codigo aqui
let myArray = str.split(' '); 
    let myStack = new Stack();
    for (let palabra=0; palabra < myArray.length; palabra++) {
        let palabraMirror = new Stack();
        for (let letra = myArray[palabra].length -1; letra >=0; letra--) {
            palabraMirror.array.push(myArray[palabra][letra]);
        }
        myStack.array.push(palabraMirror.array.join(''))
    }
    return myStack.array.join(' ');
};








module.exports = {
    efectoEspejo,
   
}