//CODIDO DEL CUADRADO
console.group("Cuadrados");
//const lado_cuadrado=  5;
//console.log("Los lados del cuadrado miden: "+ lado_cuadrado + " cms");
function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado();
//console.log("El perimétro del cuadrado es: "+ perimteroCuadrado + " cms");
function areaCuadrado(lado){
    return  lado * lado;
}
areaCuadrado();
//console.log("El área del cuadrado es: "+ areaCuadrado + " cms Cuadrados");
console.groupEnd();

//CODIDO DEL TRAINGULO
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2,  base_triangulo) {
 return lado1 + lado2 +  base_triangulo;
}  
perimetroTriangulo();  
function areaTriangulo(base, altura){
    return (base * altura)/2;
}
areaTriangulo();
console.groupEnd();

//CODIGO DE LA CIRCUNFERENCIA
function diametroCirculo(radio){
    return radio * 2;
}
diametroCirculo();

const PI= Math.PI;
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo()

function areaCirculo(radio){
    return (radio * radio) + PI;
}
areaCirculo();
console.groupEnd();