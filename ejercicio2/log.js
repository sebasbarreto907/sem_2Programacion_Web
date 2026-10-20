function generarTabla(numero, hasta) {
    var html = "<table>";
    html += "<thead><tr><th>Multiplicación</th><th>Resultado</th></tr></thead>";
    html += "<tbody>";

    for (var i = 1; i <= hasta; i++) {
        html += "<tr><td>" + numero + " × " + i + "</td><td>" + (numero * i) + "</td></tr>";
    }

    html += "</tbody></table>";
    return html;
}

document.getElementById("formulario-tabla").addEventListener("submit", function (evento) {
    evento.preventDefault();

    var entradaNumero = document.getElementById("numero");
    var entradaHasta = document.getElementById("hasta");
    var mensaje = document.getElementById("mensaje");
    var resultado = document.getElementById("resultado");
    var numero = Number(entradaNumero.value);
    var hasta = Number(entradaHasta.value);

    if (entradaNumero.value === "" || !Number.isFinite(numero)) {
        mensaje.textContent = "Escribe un número válido para generar la tabla.";
        resultado.innerHTML = "";
        return;
    }

    if (entradaHasta.value === "" || !Number.isInteger(hasta) || hasta < 1 || hasta > 20) {
        mensaje.textContent = "El límite debe ser un número entero entre 1 y 20.";
        resultado.innerHTML = "";
        return;
    }

    mensaje.textContent = "";
    resultado.innerHTML = generarTabla(numero, hasta);
});