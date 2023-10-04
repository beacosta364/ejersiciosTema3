//Brayna Estein Acosta Achinte cc 1107509939
//Dado un monto calcular el descuento considerando que por encima de 
//100 el descuento es el 10% y por debajo de 100 el descuento es el 2%.

//declaracion de variables
var monto, descuento1=0.1, descuento2=0.02, montoConDescuento, descuento, opcion

do {
    opcion=parseInt(prompt("elija la opcion del menu: 1.hacer proceso 2.salir"))
    switch (opcion) {
        case 1:
            monto=parseInt(prompt("ingrese el monto, menor a 100 da 2% de descuento y mayor o igual da un 10%"));
            switch (true) {
            case (monto>=100):
            montoConDescuento=monto-(monto*descuento1)
            descuento=monto*descuento1
            alert("se otorga un descuento del 10% equivalente a " +descuento+ " , el monto con descuento es de "+ montoConDescuento);
        break;
        default:
            montoConDescuento=monto-(monto*descuento2)
            descuento=monto*descuento2
            alert("se otorga un descuento del 2% equivalente a " +descuento+ " , el monto con descuento es de "+ montoConDescuento);
        break;
        }
    break;
    }
} while (opcion !=2);