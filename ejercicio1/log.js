function clasificarNota(nota) {
    if (nota < 0 || nota > 10) {
        return "Nota no válida";
    } else if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7) {
        return "Aprobado";
    } else if (nota >= 5) {
        return "En recuperación";
    } else {
        return "Reprobado";
    }
}

document.getElementById("formulario-nota").addEventListener("submit", function (evento) {
    evento.preventDefault();

    var entrada = document.getElementById("nota");
    var salida = document.getElementById("resultado");
    var nota = Number(entrada.value);

    if (entrada.value === "" || Number.isNaN(nota)) {
        salida.textContent = "Escribe una nota válida para continuar.";
        return;
    }

    salida.textContent = clasificarNota(nota);
});