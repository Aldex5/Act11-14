function validarCoordenada(input) {
    let regex = /^\(\d{1,3},\d{1,3}\)$/;
    return regex.test(input);
}

// Ejemplo de uso
console.log(validarCoordenada("(123,456)")); // true
console.log(validarCoordenada("(1234,56)")); // false
