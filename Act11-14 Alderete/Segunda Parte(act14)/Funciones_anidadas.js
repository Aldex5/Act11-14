function funcionPrincipal(parametro) {
    let variableLocal = "Variable local de la función principal";

    function funcionAnidada(parametroAnidado) {
        console.log("Parámetro de la función principal:", parametro);
        console.log("Parámetro de la función anidada:", parametroAnidado);
        console.log("Valor de la variable local:", variableLocal);
    }

    funcionAnidada("Parámetro de la función anidada");
}

// Ejemplo de uso
funcionPrincipal("Parámetro de la función principal");
