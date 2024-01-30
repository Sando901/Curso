//Pedir dos números y decir si non múltiplos o no

let numero1 = +prompt('Ingrese el primer numero');
let numero2 = +prompt('Ingrese el segundo numero');


if (numero1 % numero2 == 0){
    document.write('Los numeros son multiplos');
}else{
    document.write('Los numeros no son multiplos');
}

