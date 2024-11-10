let nombres = [];
let nombre;

do {
    nombre = prompt("Ingrese un nombre (escriba 'Fin' para terminar):");
    if (nombre !== "Fin") {
        nombres.push(nombre);
    }
} while (nombre !== "Fin");

console.log(`Se ingresaron ${nombres.length} nombres.`);
