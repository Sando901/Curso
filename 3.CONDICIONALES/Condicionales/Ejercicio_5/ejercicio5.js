/* Pedir una calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente
*/

let nota = prompt('Ingrese su calificacion de 0 a 10');

if ( nota > 0.0 && nota < 6.0  ){
    document.write('<h4>Tu calificacion es: Insuficiente</h4>');
}else{
    if(nota >= 6.0 && nota < 8.0){
        document.write('<h4>Tu calificacion es: Suficiente</h4>');
    }else{
        if ( nota >= 8.0 && nota < 9.0){
            document.write('<h4>Tu calificacion es: Buena</h4>');
        }else{
            if ( nota >= 9.0 && nota <= 10.0 ){
                document.write('<h4>Tu calificacion es: Excelente</h4>');
            }else{
                document.write('<h4>Nota invalida</h4>');
            }
        }
    }
}


