/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidadDePersonas;
	let seguir;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let quienllevaMasPersonas = 0;
	let sexoquienllevaMasPersonas;
	let contadorpersonasInvierno = 0;
	let cantidaddeviajesInvierno = 0;
	let promediopersonasInvierno;
	let lugarmasElegido;


	do {
		sexo = prompt('Ingresar el sexo del titular, usando "f" para femenino y "m" para masculino.').toLowerCase();
		while(!(sexo == "f" || sexo == "m")){
			sexo = prompt('Ingresar el sexo del titular, usando "f" para femenino y "m" para masculino.').toLowerCase();
		}
		lugar = prompt('Ingrese el lugar de destino, eligiendo como elecciones validas "bariloche", "cataratas" o "salta".').toLowerCase();
		while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){
			lugar = prompt('Error. Reingrese el lugar de destino, eligiendo como elecciones validas "bariloche", "cataratas" o "salta".').toLowerCase();
		}
		temporada = prompt('Ingrese en que temporada es el viaje, “otoño”,”invierno, “verano o ”primavera”').toLowerCase();
		while(!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")){
			temporada = prompt('Error. Reingrese en que temporada es el viaje, “otoño”,”invierno, “verano o ”primavera”').toLowerCase();
		}
		cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de personas que viajan."))
		while(!(cantidadDePersonas >= 1)){
			cantidadDePersonas = parseInt(prompt("Error. Reingrese la cantidad de personas que viajan."))
		}

		switch(lugar){
			case "bariloche":
				contadorBariloche ++;


				break;
			case "cataratas":
				contadorCataratas ++;


				break;

			case "salta":
				contadorSalta ++;


				break;
		}

		if(quienllevaMasPersonas < cantidadDePersonas){
			quienllevaMasPersonas = cantidadDePersonas;
			sexoquienllevaMasPersonas = sexo;
		}
		
		if(temporada == "invierno"){
			contadorpersonasInvierno += cantidadDePersonas;
			cantidaddeviajesInvierno ++;
		}

		seguir = prompt('Ingrese "s" para añadir mas datos.');
	} while (seguir == "s");

	promediopersonasInvierno = contadorpersonasInvierno / cantidaddeviajesInvierno;

	if(sexoquienllevaMasPersonas == "f"){
		sexoquienllevaMasPersonas = "Femenino";

	}
	else if(sexoquienllevaMasPersonas == "m"){
		sexoquienllevaMasPersonas = "Masculino";
	}

	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarmasElegido = "Bariloche";

	}
	else if(contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta){
		lugarmasElegido = "Cataratas";
	}
	else{
		lugarmasElegido = "Salta";
	}
	
	console.log("A - El lugar más elegido es "+lugarmasElegido+"\nB - El sexo del titular que lleva más pasajeros es "+sexoquienllevaMasPersonas+
	"\nC - El promedio de personas que viajan en Invierno es "+promediopersonasInvierno);




}
