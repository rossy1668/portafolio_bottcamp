// Aplicando lo aprendido 1
// Metodo map()
// Dado el arreglo numbers crear un 
// nuevo arreglo square basado en el 
// arreglo numbers pero al cuadrado 
// utilizando metodo map()
var numbers = [2,3,4,5,6,7,8,9,10]; // Arreglo con los elementos
var square = numbers.map(x => x * x); // utilización de map para transformar cada uno de los elementos al cuadrado

// Aplicando lo aprendido 2
// Metodo reduce()
// Dado el arreglo numbers2 crear un 
// nuevo arreglo reducer basado en el 
// arreglo numbers2 la cual permita sumar todos
// los elementos del arreglo.
var numbers2 = [1,2,3,4,5]; // Arreglo con los elementos
var reducer = numbers.reduce(function(a, b){ return a + b; }); // utilizacion de reduce para poder transformar el arreglo a un valor entero, 
//que representa la suma de todos los valores que contiene

// Aplicando lo aprendido 3
// Metodo sort()
// Ejemplo ordenamiento simple
var arr = [ 40, 1, 5, 200 ];
arr.sort();  //[ 1, 200, 40, 5 ]
console.log(arr);
// Ejemplo ordenamiento complejo
arr.sort(function(a,b){return a - b;});  // [ 1, 5, 40, 200 ]
console.log(arr);

// Aplicando lo aprendido 4
// Metodo reverse()
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Aplicando lo aprendido 5
// Metodo split()
var miCadena = "Hola Mundo. Cómo estás hoy?";
var divisiones = miCadena.split(" ", 3);
console.log(divisiones);
// expected output: [Hola,Mundo.,Cómo]

// Aplicando lo aprendido 6
// Metodo split()
// Uniendo un arreglo cuatro veces en diferentes formas
// El siguiente ejemplo crea un arreglo a con tres elementos para luego unir el arreglo cuatro veces: usando el separador predeterminado, luego una coma y un espacio, 
//luego un signo de suma, y finalmente una cadena vacío.

var a = ['Viento', 'Lluvia', 'Fuego'];
var miVar1 = a.join();      // asigna 'Viento,Lluvia,Fuego' a miVar1
var miVar2 = a.join(', ');  // asigna 'Viento, Lluvia, Fuego' a miVar2
var miVar3 = a.join(' + '); // asigna 'Viento + Lluvia + Fuego' a miVar3
var miVar4 = a.join('');    // asigna 'VientoLluviaFuego' a miVar4