// Brayan Estein Acosta CC 1107509939
//Leer dos números si el primero es mayor mostrar la suma de los dos números, 
//por otro lado si el segundo es mayor elevar al cuadrado cada número, sumarlos
// y mostrar su resultado, en caso de que los números sean iguales mostrar la leyenda “los números son iguales”.


//declaracion de variables
var primerNumero, segundoNumero, operacion, opcion

do {
    opcion=parseInt(prompt("elija la opcion del menu: 1.hacer proceso 2.salir"))
    switch (opcion) {
        case 1:
            primerNumero=parseFloat(prompt("ingrese el primer numero"));
            segundoNumero=parseFloat(prompt("ingrese el segundo numero"));
            switch (true) {
                case (primerNumero>segundoNumero):
                    operacion=primerNumero+segundoNumero
                    alert("al ser el primer numero de mayor valor, se les aplico la oprecion suma, su resultado es  "+operacion);
                break;
                case (primerNumero==segundoNumero):
                    operacion=primerNumero+segundoNumero
                    alert("los numeros son iguales");
                break;
            default:
                operacion=(primerNumero*primerNumero)+(segundoNumero*segundoNumero)
                alert("al ser el segundo numero de mayor valor, se elevo al cuadrado ambos numeros y se sumaron, su resultado es  "+operacion);
            break;
            }
        break;
    break;
    }
} while (opcion !=2);
