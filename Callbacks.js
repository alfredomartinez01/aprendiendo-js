// Entendiendo asincronía en javascript
function llamadaAPI(mostrarResultados) {
    let result = 0;

    setTimeout(() => {
        result = 5;

        console.log(result);

        mostrarResultados(result);
    }, 2000);
}

llamadaAPI(mostrarResultados);

function mostrarResultados() {
    const suma = result + 1;
    console.log(suma);
}