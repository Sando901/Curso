/* Realizar un programa que pida tres números y diga cuáles son pares y cuáles impares. */

let numero1 = +prompt('Ingrese el primer numero');
let numero2 = +prompt('Ingrese el segundo numero');
let numero3 = +prompt('Ingrese el tercer numero');



if (numero1 != 0 && numero2 !=0 && numero3 != 0){
    if (numero1 % 2 == 0){
        document.write('El ' + numero1 +  ' es par');
    }else{
        document.write('El ' +  numero1 +  ' es impar');
    }
    
    document.write('<br>');
    
    if (numero2 % 2 == 0){
        document.write('El ' + numero2 +' es par');
    }else{
        document.write('El ' + numero2  + ' es impar');
    }
    
    document.write('<br>');
    
    if (numero3 % 2 == 0){
        document.write('El '+numero3+' es par');
    }else{
        document.write('El '+numero3+' es impar');
    }
    
}else{
    document.write('Hay un valor invalido');
}


