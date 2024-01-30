/*Escriba un programa que reciba cuatro calificaciones de un estudiante y
   devuelva el promedio y la máxima y la mínima calificación.*/


let nota_1 = +prompt('Ingrese su primera nota');
let nota_2 = +prompt('Ingrese su segunda nota');
let nota_3 = +prompt('Ingrese su tercera nota');
let nota_4 = +prompt('Ingrese su cuarta nota');

let nota_max;

let promedio = (nota_1 + nota_2 + nota_3 + nota_4)/4 ;


if (nota_1 > nota_2){
    if ( nota_1 > nota_3 ){
        if (nota_1 > nota_4){
            nota_max = nota_1 ; 
        }else{
            nota_max = nota_4 ;
        }
    }else{
        if ( nota_3 > nota_4){
            nota_max = nota_3 ;
        }else{
            nota_max = nota_4 ;
        }
    }
}else{
    if ( nota_2 > nota_3){
        if(nota_2 > nota_4){
            nota_max = nota_2;
        }else{
            nota_max = nota_4 ;
        }
    }else{
        if ( nota_3 > nota_4){
            nota_max = nota_3 ;
        }else{
            nota_max = nota_4 ;
        }
    }
}

let nota_min;

if (nota_1 < nota_2){
    if ( nota_1 < nota_3 ){
        if (nota_1 < nota_4){
            nota_min = nota_1 ; 
        }else{
            nota_min = nota_4 ;
        }
    }else{
        if ( nota_3 < nota_4){
            nota_min = nota_3 ;
        }else{
            nota_min = nota_4 ;
        }
    }
}else{
    if ( nota_2 < nota_3){
        if(nota_2 < nota_4){
            nota_min = nota_2;
        }else{
            nota_min = nota_4 ;
        }
    }else{
        if ( nota_3 < nota_4){
            nota_min = nota_3 ;
        }else{
            nota_min = nota_4 ;
        }
    }
}


document.write(

    'Promedio: ' + promedio + '<br>' +
    'Nota Maxima: '+ nota_max + '<br>' +
    'Nota Minima: '+ nota_min 

);



