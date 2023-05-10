/* npm init

    npm -> manejador de paquetes 


    node main.js
    npm run entra al package.json busca scripts
*/

// let numeros = [];
// const numeros = [];
// const numero_a = 4;

// let clienteDB = {};

// if (clienteDB !== undefined)
//  return false;

// clienteDB = db.insert()


let x = 3.2
let y = []

//Metodos que se puede ejecutar sobre arreglos
y.push(x) // Agrega un elemento al final del arreglo
y.push(4)
y.push(5)
y.push(6)
y.push(7)
y.push(8)
y.push(9)
y.push(10)

y.pop() // Elimina el ultimo elemento del arreglo
//y.shift() // Elimina el primer elemento del arreglo

// Para recorrer un arreglo
// for (let i = 0; i < y.length; i++){..}
// while (1 < y.length) {..}

y.forEach(function (x, y, z) { // Recibe funcion anonima (no tienen nombre)
    console.log(x + " " + y + " ");
}
);


// Declaración de funciones

//Una función se puede asignar a una variable 
const chicarronera = function (a, b, c) { // Function expression
    return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
}
const sumaYResta = (param1, param2) => { // Arrow function

}

function resolverEcuacion(funcionCalculadora) { // Function declaration. High order functions (reciben la varible una funcion como parametro)
    let a = 1;
    let b = 2;
    let c = 1;

    let resultado = funcionCalculadora(a, b, c);
    return resultado;
}
const resultado = resolverEcuacion(chicarronera);


//For each implementado 
function forEach(callBack) { // Callback es una función que se ejecuta dentro de otra función
    for (let i = 0; i < y.length; i++) {
        callBack(y[i], i, y);
    }
}

forEach(item => {
    console.log("Callback execution: " + item);
});

//For each build-in
y.forEach(item => {
    console.log(item);
});



//Manejo de objetos 

const objeto = {
    nombre: "pluma",
    color: "negro"
}


console.log(objeto)

// POO
// Creando objetos con el object constructor (para objetos dinámicos y reutilizables) donde en la misma función se encuentra la info del objeto
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const Juan = new Cliente('Juan', 500);

console.log(Juan);

// Class declaration
class ClienteClass {
    // Si fuera java
    // let nombre;
    // let saldo;

    // Declarando una propiedad como privada
    #nombre;

    // Para declarar un constructor
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    // para crear métodos
    mostrarInformacion() {
        // return "Cliente: " + this.#nombre + " tiene un saldo de $ " + this.saldo; // Concatenación de string
        return `Cliente : ${this.#nombre} tiene un saldo de ${this.saldo}`; // Inyección usando js con template string
    }

    // Para tener métodos estáticos (pertenece a la clase y no al objeto)
    static Bienvenida(){
        return 'Bienvenido al cajero';
    }
}
// Instanciando la clase
const Lola = new ClienteClass('Lola', 400);
ClienteClass.Bienvenida();
console.log(Lola.mostrarInformacion());

