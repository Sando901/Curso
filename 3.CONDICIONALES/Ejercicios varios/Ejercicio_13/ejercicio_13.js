//Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos. 

let cateto1 = +prompt('Ingrese el valor del primer cateto');
let cateto2 = +prompt('Ingrese el valor del segundo cateto');

let cateto1_cuadrado = (cateto1 * cateto1);
let cateto2_cuadrado = (cateto2 * cateto2 );

let hipotenusa = Math.sqrt(cateto1_cuadrado + cateto2_cuadrado );

document.write('El valor de la hipotenusa es de: '+ hipotenusa);