function horasACobrar(minutos) {
    return Math.ceil(minutos / 60);
}

function calcularTarifa(minutos) {
    if (minutos <= 0) {
        return 0;
    }

    var horas = horasACobrar(minutos);
    var tarifa = 1 + (horas - 1) * 0.5;

    if (tarifa > 5) {
        tarifa = 5;
    }

    return tarifa;
}

document.getElementById("formulario-parqueadero").addEventListener("submit", function (evento) {
    evento.preventDefault();

    var entrada = document.getElementById("minutos");
    var mensaje = document.getElementById("mensaje");
    var resultado = document.getElementById("resultado");
    var detalle = document.getElementById("detalle");

    if (entrada.value === "") {
        mensaje.textContent = "Escribe los minutos de parqueo para continuar.";
        resultado.textContent = "Aquí aparecerá la tarifa.";
        detalle.textContent = "";
        return;
    }

    var minutos = Number(entrada.value);

    if (!Number.isFinite(minutos) || minutos <= 0) {
        mensaje.textContent = "Escribe una cantidad de minutos mayor que cero.";
        resultado.textContent = "Aquí aparecerá la tarifa.";
        detalle.textContent = "";
        return;
    }

    var horas = horasACobrar(minutos);
    var tarifa = calcularTarifa(minutos);

    mensaje.textContent = "";
    resultado.textContent = "$" + tarifa.toFixed(2);
    detalle.textContent = "Tiempo cobrado: " + horas + (horas === 1 ? " hora." : " horas.");
});