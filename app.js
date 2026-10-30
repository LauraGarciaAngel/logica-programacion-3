let numero;

while (true) {
    let entrada = prompt("Ingresa un número entero:");
    numero = Number(entrada);

    if (entrada !== null && entrada.trim() !== "" && !isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
        break;
    }
    console.log("Error: Debes ingresar un número entero positivo o cero.");
}

let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log(`El factorial de ${numero} es: ${factorial}`);
