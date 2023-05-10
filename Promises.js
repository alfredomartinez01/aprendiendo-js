// IMPLEMENTANDO PROMISES
// Si todo salió bien, cae en resolve, de otra forma cae en reject
function promiseFunction(resolve, reject) {
    const descuento = false;
    setTimeout(() => {
        console.log('Aplicando descuento');

        if (descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('No se pudo aplicar el descuento');
        }
    }, 3000);
}

const aplicarDescuento = new Promise(promiseFunction);

aplicarDescuento
    .then(myResolve) // Lo que le pasemos al then es lo que se va a ejecutar cuando el promise se cumpla
    .catch(myReject)
    .finally(() => { // Se ejecuta siempre, tanto si se cumple como si no
        console.log("Se ejecuta siempre");
    });

function myResolve(mensaje) {
    console.log(mensaje + " desde myResolve");
}

function myReject(error) {
    console.log(error + " desde myReject");
}

// aplicarDescuento
//     .then(resultado => { // Por si el promise se cumplió correctamente
//         console.log(resultado); // Muestra 'Descuento aplicado'
//         descuento('Descuento aplicado correctamente');
//     })
//     .catch(error => { // Por si el promise no se cumplió
//         console.log(error); // Muestra 'no se pudo aplicar el descuento'
//     });

// function descuento(mensaje) {
//     console.log(mensaje);
// }
//console.log(aplicarDescuento);

// Hay 3 valores poosibles 
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - El promise no se ha cumplido/rechazado