/*
let producto1 = prompt("ingresar el nombre del producto");
let producto2 = prompt("ingresar el nombre del segundo producto");
let producto3 = prompt("ingresar el nombre del tercer producto");
let stock1: number = Number(
  prompt("ingresar stock disponible del primer producto")
);
let stock2: number = Number(
  prompt("ingresar stock disponible del segundo producto")
);
let stock3: number = Number(
  prompt("ingresar stock disponible del tercer producto")
);
let precio1: number = Number(prompt("ingresar precio del primer producto"));
let precio2: number = Number(prompt("ingresar precio del segundo producto"));
let precio3: number = Number(prompt("ingresar precio del tercer producto"));

console.log("Bienvenido al Mini Super de APU");
console.log(
  `Nuestros productos disponibles son  ${stock1} ${producto1}, cuesta ${precio1} cada uno, ${stock2} ${producto2}, cuesta ${precio2} cada uno, ${stock3} ${producto3}, cuesta ${precio3} cada uno.`
);
let compra1: number = Number(prompt(`cuantas ${producto1} desea llevar?`));
while (compra1 <= 0 && compra1 >= stock1) {
  console.log("numero invalido");
  compra1 = Number(prompt(`cuantas ${producto1} desea llevar?`));
}
let compra2: number = Number(prompt(`cuantas ${producto2} desea llevar?`));
while (compra2 <= 0 && compra2 >= stock2) {
  console.log("numero invalido");
  compra2 = Number(prompt(`cuantas ${producto2} desea llevar?`));
}
let compra3: number = Number(prompt(`cuantas ${producto3} desea llevar?`));
while (compra3 <= 0 && compra3 >= stock3) {
  console.log("numero invalido");
  compra3 = Number(prompt(`cuantas ${producto3} desea llevar?`));
}
//controla cantidad stock ingresado
let limiteInf: number;
let limiteSup: number;
let suma: number;

if ((limiteInf > 0 && limiteSup <= compra1, compra2, compra3)) {
  limiteSup = 0;
  (limiteInf = compra1), compra2, compra3;
} else if (((limiteSup) => compra1, compra2, compra3 && limiteInf < 0)) {
  limiteInf = 0;
  (limiteSup = compra1), compra2, compra3;
} else {
  limiteSup = 0;
  (limiteInf = compra1), compra2, compra3;
}
for (let contador: number = limiteInf; contador <= limiteSup; contador++) {
  suma = suma + contador;
}

//Calcula la compra
let calculo1: number = precio1 * compra1;
let calculo2: number = precio2 * compra2;
let calculo3: number = precio3 * compra3;
let precioTotal: number = calculo1 + calculo2 + calculo3;
let stockRestante1: number = stock1 - compra1;
let stockRestante2: number = stock2 - compra2;
let stockRestante3: number = stock3 - compra3;

if (compra1 > stock1 || compra2 > stock2 || compra3 > stock3) {
  console.log(
    `No tenemos stock suficiente para su pedido, intente nuevamente.`
  );
} else {
  console.log(`has comprado ${compra1} ${producto1}, lo que seria ${calculo1}`);
  console.log(`has comprado ${compra2} ${producto2}, lo que seria ${calculo2}`);
  console.log(`has comprado ${compra3} ${producto3}, lo que seria ${calculo3}`);
  console.log(`el precio total seria ${precioTotal}`);
  console.log(
    `el stock restante seria ${stockRestante1} ${producto1} ${stockRestante2} ${producto2} ${stockRestante3} ${producto3}`
  );
  console.log("Gracias!, vuelvan prontos...");
}
*/
