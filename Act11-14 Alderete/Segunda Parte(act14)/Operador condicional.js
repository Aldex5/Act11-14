function calcularSueldoNeto(sueldoBruto) {
    let descuento = sueldoBruto > 10000 ? 0.1 : 0.05;
    return sueldoBruto * (1 - descuento);
}

// Ejemplo de uso
console.log(calcularSueldoNeto(12000)); // Aplica un 10% de descuento
console.log(calcularSueldoNeto(8000));  // Aplica un 5% de descuento
