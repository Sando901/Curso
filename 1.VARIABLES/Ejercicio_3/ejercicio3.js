/*Suponiendo que 1 euro = 1.33250 dólares. 
Escribe un programa que pida al usuario un número de dólares y calcule el cambio en euros.*/

const euro = 1.33250 ;

let Dolar = prompt('Ingrese el cantidad de dolares que desea convertir');

let conversion = Dolar * euro ;

console.log('Sus '+ Dolar + ' dolares se han convertido en '+ conversion + ' euros' )


