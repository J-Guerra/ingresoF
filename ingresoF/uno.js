/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadordeMujeres = 0;
	let sumadeEdades = 0;
	let promediodeEdad;
	let pesohombremaspesado = 0;
	let hombremaspesado;

	for(let i = 0;i <= 4; i++){
		nombre = prompt("Ingrese el nombre de la persona.")
		peso = parseFloat(prompt("Ingrese el peso de la persona expresado en kilogramos."));
		while(!(peso>= 0.1)){
			peso = parseFloat(prompt("Error. Reingrese el peso de la persona expresado en kilogramos."));
		}
		sexo = prompt('Ingrese el sexo de la persona, usando "f" para femenino y "m" para masculino.').toLocaleLowerCase();
		while(!(sexo =="f" || sexo =="m" )){
			sexo = prompt('Error. Reingrese el sexo de la persona, usando "f" para femenino y "m" para masculino.').toLocaleLowerCase();
		}
		edad = parseInt(prompt("Ingrese la edad de la person."));
		while(!(edad >=1)){
			edad = parseInt(prompt("Error. Reingrese la edad de la person."));
		}

		sumadeEdades += edad;

		if(sexo == "f"){
			contadordeMujeres ++;
		}
		if(sexo =="m" && pesohombremaspesado <= peso){
			pesohombremaspesado = peso;
			hombremaspesado = nombre;
			
		}
	

	}
	promediodeEdad = sumadeEdades / 5

	console.log("A - La cantidad de mujeres ingresadas es "+contadordeMujeres+
	"\nB - La edad promedio de las personas ingresadas es "+promediodeEdad+"\nC - El hombre mas pesado es "+hombremaspesado)

}
