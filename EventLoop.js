// Event loop (Modelo de concurrencia y loop de eventos)
// Cómo se va ejecutando el código en JS, qué tiene más prioridad, etc

// La ejecución de JS se realiza en un hilo, primero se hacen unos, cuando termina se ejecutan otros

// Las funciones y el código se va colocando en el stack, primero se va colocando aquí, otras se van colocando en el queue

// Algunos ejemplos de prioridad
console.log('Primero'); // 1

setTimeout(() => { // 5
    console.log('Segundo');
}, 0);

console.log('Tercero'); // 2

setTimeout(() => { // 6
    console.log('Cuarto');
}, 0);

new Promise((resolve,)=>{ // 4 
    resolve('Desconocido');
}).then(console.log);

console.log('Ultimo'); // 3

function hola(){
    console.log("Hola");
}

hola(); // 3.1