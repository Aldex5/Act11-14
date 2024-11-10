function validarNumero(input) {
    let regex = /^\d{3}\.\d{2}$/;
    return regex.test(input);
}

// Ejemplo de uso
console.log(validarNumero("123.45")); // true
console.log(validarNumero("12.345")); // false
