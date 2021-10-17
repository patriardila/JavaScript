//CODIDO DEL CUADRADO
console.group("Cuadrados");
const lado_cuadrado=  5;
console.log("Los lados del cuadrado miden: "+ lado_cuadrado + " cms");
const perimteroCuadrado = lado_cuadrado * 4;
console.log("El perimétro del cuadrado es: "+ perimteroCuadrado + " cms");
const areaCuadrado= lado_cuadrado * lado_cuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado + " cms Cuadrados");
console.groupEnd();

//CODIDO DEL TRAINGULO
console.group("Triángulos");
const lado_triangulo1=  6;
const lado_triangulo2=  6;
const base_triangulo=  4;
console.log(
    "Los lados del triángulo miden: "
    + lado_triangulo1 
    + " cms, " 
    + lado_triangulo2
    + "cms, "
    + base_triangulo
    + "cms "
);
const altura_triangulo= 5.5;
console.log("La altura del triángulo es: " + altura_triangulo + "cms")
perimetroTriangulo= lado_triangulo1 + lado_triangulo2 + base_triangulo;     
console.log ("El perimétro del traingulo es: " + perimetroTriangulo + " cms ");
const areaTriangulo=  (base_triangulo * altura_triangulo) /2;
console.log ("El área del triangulo es: " + areaTriangulo + " cms ");
console.groupEnd();

//CODIGO DE LA CIRCUNFERENCIA
console.group("Círcunferencia");
const  radioCirculo =4;
console.log ("El radio  del círculo es: " + radioCirculo + " cms ");
const diametroCirculo = radioCirculo * 2;
console.log ("El diamétro  del circulo es: " + diametroCirculo + " cms ");
const PI = Math.PI;
const perimetroCirculo=  diametroCirculo * PI;
console.log ("El perimétro del círculo  es: " + perimetroCirculo + " cms ");
const areaCirculo= (radioCirculo * radioCirculo) * PI;
console.log ("El área del círculo  es: " + areaCirculo + " cms ");

console.groupEnd();