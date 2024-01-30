/* Escribir un programa que pida por teclado dos resistencias y calcule y presente 
la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)). */

const R1 = +prompt('ingrese el valor de la primera resistencia ');
const R2 = +prompt('ingrese el valor de la segunda resistencia ');

const req = ((R1*R2)/(R1+R2)) ; 

console.log('El valor de la resistencia equivalente es: '+ req);
