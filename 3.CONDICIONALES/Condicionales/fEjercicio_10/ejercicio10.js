/* Pida a usuario la edad y el sexo, para que la computadora le indique si ya puede jubilarse. 
Tome en cuenta que un Hombre se puede jubilar cuando tenga 60 años o más, en cambio, 
una mujer mayor se jubilara si tiene más de 54 años.*/


let edad = +prompt('Ingrese su edad');
let sexo = prompt('Ingrese su sexo');

let sexomayus = sexo.toUpperCase();


if ( sexomayus == 'MUJER' || sexomayus == 'FEMENINO' ){

    if ( edad >= 54){
        document.write('Usted ya puede jubilarse');
    }else{
        document.write('Usted no puede jubilarse');
    }

}else{
    if (sexomayus == 'HOMBRE' || sexomayus == 'MASCULINO'){
        if ( edad >= 60 ){
            document.write('Usted ya puede jubilarse');
        }else{
            document.write('Usted no puede jubilarse');
        }
    }else{
        document.write('Sexo invalido');
    }
}