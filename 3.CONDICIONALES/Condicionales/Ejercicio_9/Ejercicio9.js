/* Realizar un programa que pida tres números y diga cuál es el mayor, cuál es el segundo mayor, 
y cuál es el menor. (Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2)*/

let persona_1 = +prompt('Ingrese la edad de la primera persona');
let persona_2 = +prompt('Ingrese la edad de la segunda persona');
let persona_3 = +prompt('Ingrese la edad de la tercera persona');


if ( persona_1 > persona_2 && persona_1 > persona_3){
    document.write('Persona mayor: '+ persona_1);
}else{
    if ( (persona_1 > persona_2 && persona_1 < persona_3) || (persona_1 > persona_3 && persona_1 < persona_2) ){
        document.write('Persona medio '+ persona_1);
    }

    if ( persona_1 < persona_2 && persona_1 <persona_3){
        document.write('Persona menor: '+ persona_1);
    }
}

document.write('<br>');

if ( persona_2 > persona_1 && persona_2 > persona_3){
    document.write('Persona mayor: '+ persona_2);
}else{
    if ( (persona_2 > persona_1 && persona_2 < persona_3) || (persona_2 > persona_3 && persona_2 < persona_1) ){
        document.write('Persona medio '+ persona_2);
    }

    if ( persona_2 < persona_1 && persona_2 <persona_3){
        document.write('Persona menor: '+ persona_2);
    }
}

document.write('<br>');

if ( persona_3 > persona_2 && persona_3 > persona_1){
    document.write('Persona mayor: '+ persona_3);
}else{
    if ( (persona_3 > persona_2 && persona_3 < persona_1) || (persona_3 > persona_1 && persona_3 < persona_2) ){
        document.write('Persona medio '+ persona_3);
    }

    if ( persona_3 < persona_2 && persona_3 <persona_1){
        document.write('Persona menor: '+ persona_3);
    }
}