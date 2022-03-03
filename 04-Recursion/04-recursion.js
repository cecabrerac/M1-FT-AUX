// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10
// producto([7, 2, 5]) devuelve 70
const producto = function (array) {
  //escribe aqui tu codigo
  let prod = array[0];
  array.shift();
  if(array.length > 0 ) prod = prod * producto(array);
  return prod;
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
const isThere = function (obj, value) {
  //escribe aqui tu codigo
  for (let i in obj) {
    let myVal = obj[i];
    var newObj = obj[i];
    if (myVal === value) return true;
  }
  if (typeof newObj === 'object') return isThere(newObj,value)
  return false;
};


module.exports = { producto, isThere };
