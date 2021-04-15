 
/**
 * Con el objeto de inventario, se pide desarrollor una function que reciba como parametro
 * el articulo (shoes, socks, shirts, pants) y una cantidad. Si la cantidad es menor o igual a la cantidad 
 * del inventario, se actualiza el objeto disminuyendo la cantidad y se retorna el codigo 200 que significa 'Venta exitosa'. 
 * Si la cantidad es mayor al stock existente, no se actualiza el objeto y se retorna el codigo 500 'Imposible de realizar la venta'
 * 
 */

 const inventory = {
    shoes: 10,
    socks: 6,
    shirts: 10,
    pants: 5,
  }

const sale = function (article, cant){
  let ventaExitosa = 200;
  let ventaFallida = 500;
  let resultado = null;
  //let aux = 0;
  //let inventario = null;


  console.log(recorrer());

  function recorrer() {
    switch (article){
      case 'shoes':
        if (cant <= inventory.shoes) {
          inventory.shoes = inventory.shoes - cant;
          resultado = ventaExitosa;
        } else {
          resultado = ventaFallida;
        }
        break;
      case 'socks':
        if (cant <= inventory.socks) {
          inventory.socks = inventory.socks - cant;
          resultado = ventaExitosa;
        } else {
          resultado = ventaFallida;
        }
        break;
      case 'shirts':
        if (cant <= inventory.shirts) {
          inventory.shirts = inventory.shirts - cant;
          resultado = ventaExitosa;
        } else {
          resultado = ventaFallida;
        }
        break;
      case 'pants':
        if (cant <= inventory.pants) {
          inventory.pants = inventory.pants - cant;
          resultado = ventaExitosa;
        } else {
          resultado = ventaFallida;
        }
        break;
    }
    
    return resultado;
  }

  return resultado;
}

// TESTS (no modificar)
console.log(sale('shoes',8) === 200 && inventory.shoes === 2);
console.log(sale('shoes',3) === 500 && inventory.shoes === 2);
console.log(sale('pants',5) === 200 && inventory.pants === 0);