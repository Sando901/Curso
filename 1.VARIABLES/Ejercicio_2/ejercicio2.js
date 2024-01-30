/* Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con descuento. Por ejemplo, 
si el precio que introduce el usuario es 300 y el descuento 20%, el programa dirá que el precio final con descuento es de 240. */


let Precio = prompt("Ingrese el precio del producto");
let Descuento = prompt("Ingrese el porcentaje del descuento");

let ValorDescuento = Precio * Descuento / 100 ;
let ValorFinal = Precio - ValorDescuento ; 


console.log("El precio con descuento de su producto es de " + ValorFinal + " pesos");

