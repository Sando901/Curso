/*Escribe un programa que pregunte al usuario si es culpable o no. 
Asumiremos que: En caso afirmativo el usuario responderá si, en caso contrario responderá no.
 Si el usuario responde si se escribirá el documento «irás a la cárcel»..*/

let culpable = prompt('Escribe si eres culpable o no');
let culpableMayus = culpable.toUpperCase();

if (culpableMayus == 'SI'){
    document.write('Eres culpable');
}else {
    if (culpableMayus == 'NO'){
        document.write('Eres inocente');
    }else{
        document.write('Valor invalido')
    }
}




            