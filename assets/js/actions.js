//Comentarios de una linea
// probar si esta bien hecha la conexión de html con JS

//alert("la conexión con JS está OK");

/*
Comentarios de una o más lineas
*/

//para imprimir datos por consola
var noRecomendada = 2;
let siRecomendada = "Hola soy una cadena";
//imprimir por consola
console.log(siRecomendada);
//Number o número: enteros, negativos y decimales
let numero = 30;
//para saber el tipo de variable
console.log(typeof numero);
//Cadena de texto o string
let cadena = "hla";
console.log(typeof cadena);
//Booleano: true o false
let booleano = true
console.log(typeof booleano);
//variable no definida o undefined
let nodefinida;
console.log(typeof nodefinida);
//variable nula o null
let nula = null
console.log(typeof nula);
//constante
const rut = "21.532.167-k";
console.log(typeof rut);
//variable de convención
//camel case: primera palabra en minuscula y al llegar a la segunda palabra, esta tiene la primera letra en mayuscula
let camelCase = "usando camel case";
//snake case: laa palabras van separadas por un guion bajo
let snake_case = "usando snake case";
//upper case: solo letras mayusculas
let UPPERCASE = "usando upper case";
//objetos,no respetan el orden con el que fueron declarados {} mediante una clave : valor
let estudiante = {
    nombre: "elnombre",
    edad: 27,
    apellido: "elapellido",
    carrera: "lacarrera",
};
console.log(estudiante);
//dato especifico
console.log(estudiante.carrera, estudiante.edad);
//otra manera
console.log(estudiante["apellido"]);
//modificar dato
estudiante.edad = 210;
console.log(estudiante.edad);
//eliminar dato
delete estudiante.carrera;
console.log(estudiante);
