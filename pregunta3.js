// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let mayor1 = 0;
    let mayor2 = 0;
    let mayor3 = 0;
    let valor = null;

    return buscar1er();

    function buscar1er() {
        if (nums.length >= 3) {
        
            for (let index = 0; index < nums.length; index++) {
            if (nums[index] > mayor1) {
                mayor1 = nums[index];
            }
            if (nums[index] > mayor2 && mayor2 <= mayor1) {
                mayor2 = nums[index];
            }
            if (nums[index] > mayor3 && mayor3 <= mayor1 && mayor3 <= mayor2) {
                mayor3 = nums[index];
                valor = mayor3;
            }
            }
            
        } else if(mayor1 == mayor2 == mayor3) {
            valor = undefined;
        } else {
            valor = undefined;
        }

        //
        return valor;
    }
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);