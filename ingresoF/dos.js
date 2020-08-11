/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let seguir;
  let contadortotaldepeso = 0;
  let preciomasCaroLiquido = 0;
  let preciomasBaratoSolido = 1000000;
  let marcamasCaroLiquido;
  let marcamasBaratoSolido;
  let flagliquido = 0;
  let flagsolido = 0;
  let mensajeB = "B - No se ingresaron productos del tipo líquido.";
  let mensajeC = "C - No se ingresaron productos del tipo sólido.";

  do {
    marca = prompt("Ingrese la marca del producto.");

    precio = parseFloat(prompt("Ingrese el precio del producto."));
    while(!(precio >= 0.1 )){
      precio = parseFloat(prompt("Precio Invalido. Reingrese el precio del producto."));
    }
    peso = parseFloat(prompt("Ingrese el peso del producto expresandolo en kilogramos."));
    while(!(peso >= 0.1)){
      peso = parsefloat(prompt("Error. Reingrese el peso del producto expresandolo en kilogramos."));
    }
    tipo = prompt('Ingrese el tipo de producto, ya sea este "liquido" o "solido".').toLowerCase();
    while(!(tipo == "liquido" || tipo == "solido")){
      tipo = prompt('Error. Tipo de producto invalido, reingrese el tipo de producto ya sea este "liquido" o "solido".').toLowerCase();
    }

    contadortotaldepeso += peso;

    switch(tipo){
      case "liquido":
        if(preciomasCaroLiquido < precio){
          preciomasCaroLiquido = precio;
          marcamasCaroLiquido = marca;
        }
        flagliquido = 1;

        break;

      case "solido":
        if(preciomasBaratoSolido > precio){
          preciomasBaratoSolido = precio;
          marcamasBaratoSolido = marca;
        }
        flagsolido = 1;

        break;

    }
  
    seguir = prompt('Ingrese "s" para añadir otro producto.').toLowerCase();
  } while (seguir =="s");

  if(flagliquido == 1){
    mensajeB = "B - La marca del producto líquido mas caro es "+marcamasCaroLiquido;
  }
  if(flagsolido == 1){
    mensajeC = "C - La marca del producto sólido mas barato es "+marcamasBaratoSolido;
  }

  console.log("A - El peso total de la compra es "+contadortotaldepeso+"\n"+mensajeB+"\n"+mensajeC);
}
