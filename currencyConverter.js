document.addEventListener("DOMContentLoaded", function () {
    const conversionForm = document.getElementById("conversionForm");
    const resultado = document.getElementById("resultado");

    conversionForm.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    document.getElementById("convertirBtn").addEventListener("click", function () {
        const monedaSeleccionada = document.querySelector('input[name="moneda"]:checked');
        const valor = parseFloat(document.getElementById("valor").value);

        if (!monedaSeleccionada || isNaN(valor)) {
            resultado.innerHTML = "Por favor, seleccione una moneda y ingrese un valor válido.";
            return;
        }

        const moneda = monedaSeleccionada.value;
        let conversion = 0;

        if (moneda === "dolares") {
            // Convertir de Dólares a Euros (tasa de conversión ficticia)
            conversion = valor * 0.93;
            resultado.innerHTML = `USD ${valor.toFixed(2)} = EUR ${conversion.toFixed(2)}`;
        } else {
            // Convertir de Euros a Dólares (tasa de conversión ficticia)
            conversion = valor * 1.08;
            resultado.innerHTML = `EUR ${valor.toFixed(2)} = USD ${conversion.toFixed(2)}`;
        }
    });
});
