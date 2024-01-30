/* Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el precio con descuento. Por ejemplo, 
si el precio que introduce el usuario es 300 y el descuento 20%, el programa dirá que el precio final con descuento es de 240. */


const Precio = prompt("Ingrese el precio del producto");
const Descuento = prompt("Ingrese el porcentaje del descuento");

const ValorDescuento = Precio * Descuento / 100 ;
const ValorFinal = Precio - ValorDescuento ; 


console.log("El precio con descuento de su producto es de " + ValorFinal + " pesos");

