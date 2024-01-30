/* Escribir un programa que pida por teclado dos resistencias y calcule y presente 
la resistencia equivalente en paralelo (Req=(R1*R2)/(R1+R2)). */

let R1 = +prompt('ingrese el valor de la primera resistencia ');
let R2 = +prompt('ingrese el valor de la segunda resistencia ');



let req = ((R1*R2)/(R1+R2)) ; 

console.log('El valor de la resistencia equivalente es: '+ req);
document.write('El valor de la resistencia equivalente es: ' + req) ;
