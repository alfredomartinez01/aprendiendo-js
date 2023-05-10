// TRY-CATCH

function aplicarDescuento() {
    return new Promise((resolve, reject) => {
        const descuento = true;
        setTimeout(() => {
            console.log('Aplicando descuento');

            if (descuento) {
                resolve('Descuento aplicado');
            } else {
                reject('No se pudo aplicar el descuento');
            }
        }, 3000);
    });
}

// ASYNC AWAIT
async function funcionSincrona() {
    try {
        // Esto es el then
        // const mensaje = await aplicarDescuento();
        const mensaje = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(mensaje + " desde try");

    } catch (error) {
        // Esto es el catch
        console.log(error + " desde catch");
    }
}

// 
function funcionAsincrona() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
}

funcionAsincrona();