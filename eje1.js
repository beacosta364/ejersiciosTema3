// brayan estein acosta achinte cc 1107509939
//Dada la calificación de un alumno mostrar en pantalla si es aprobado 
//siempre y cuando tenga el 80% de sus asistencias, en caso de tener menos 
//del 80% de asistencias se mostrará reprobado aún cuando su calificación 
//sea aprobatoria.

//para este ejersicio se tomara que el numero maximo de clases fueron 10 y que la nota maxima es 5.0

//declaracion de variables
var  asistencias, cantidadClases=10, minasistencia=80, calificacion, porcentajeAsistencias, opcion


do {
    opcion=parseInt(prompt("elija la opcion del menu: 1.hacer proceso 2.salir"))
    switch (opcion) {
        case 1:
            asistencias=parseInt(prompt("dado el maximo de clases 10, a cuantas clases asistio el alumno"));
            calificacion=parseFloat(prompt("dado la nota maxima 5.0, ingrese la nota del alumno"));
            porcentajeAsistencias= (asistencias/cantidadClases)*100
            switch (true) {
                case (porcentajeAsistencias>=minasistencia && calificacion>=3.0):
                    alert("el alumno aprueba con " +calificacion + " de nota, y un "+porcentajeAsistencias +" % de asistencia");
                    break;
                default:
                    alert("el alumno no aprueba dado que obtubo una calificacion de " +calificacion + " y un "+porcentajeAsistencias +"% de asistencia");
                    break;
            }
            break;
    }
} while (opcion !=2);
