/* En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos más baratas. 
   Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar. */

let peli1 = +prompt('Ingrese el precio de la primera pelicula');
let peli2 = +prompt('ingrese el precio de la segunda pelicula');
let peli3 = +prompt('Ingrese el precio de la tercera pelicula');

let precio;

if (peli1 > peli2 ){

    if(peli1 > peli3){
        precio = (peli2 + peli3);
    }else{
        precio = (peli1 + peli2);
    }

}else{

   if ( peli2 > peli3){
    precio = (peli1 + peli3);
   }else{
    precio = (peli1 + peli2);
   }

}

document.write('La cantidad que hay que pagar es de: '+ precio + 'pesos');
