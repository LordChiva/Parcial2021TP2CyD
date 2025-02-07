/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */

const even = function(numbers){
    let pares = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 === 0) {
            pares.push(numbers[index]);
        }
    }
    return pares;
}

const odd = function(numbers){
    let impares = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 != 0) {
            impares.push(numbers[index]);
        }
    }
    return impares;
}

// TESTS (no modificar)
const arrEqual = (a1,a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4,2,6,1,0,2,5]),[4,2,6,0,2]));
console.log(arrEqual(odd([4,2,6,1,0,2,5]),[1,5]));
