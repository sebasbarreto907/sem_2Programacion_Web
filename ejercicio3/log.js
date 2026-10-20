function operar(a, b, operador) {
    switch (operador) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
        case "×":
            return a * b;
        case "/":
        case "÷":
            if (b === 0) {
                return "No se puede dividir para 0";
            }
            return a / b;
        default:
            return "Operador no válido";
    }
}

document.getElementById("formulario-calculadora").addEventListener("submit", function (evento) {
    evento.preventDefault();

    var entradaA = document.getElementById("numero-a");
    var entradaB = document.getElementById("numero-b");
    var operador = document.getElementById("operador").value;
    var mensaje = document.getElementById("mensaje");
    var resultado = document.getElementById("resultado");

    if (entradaA.value === "" || entradaB.value === "") {
        mensaje.textContent = "Escribe los dos números para continuar.";
        return;
    }

    var numeroA = Number(entradaA.value);
    var numeroB = Number(entradaB.value);

    if (!Number.isFinite(numeroA) || !Number.isFinite(numeroB)) {
        mensaje.textContent = "Escribe dos números válidos.";
        return;
    }

    mensaje.textContent = "";
    resultado.textContent = operar(numeroA, numeroB, operador);
});