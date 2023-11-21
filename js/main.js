function calculartodo() {
    const textbox = document.getElementById("gauss");
    document.getElementById("resultados").classList.remove("hidden")
    document.getElementById("resultado").classList.remove("hidden")
    document.getElementById("determinantes").classList.remove("hidden")
    document.getElementById("inv").classList.remove("hidden")
    let matrix = scannmatrix('miTabla');
    console.log("Matriz después de scannmatrix:", matrix);
    gauss(matrix);
    gauss_det(matrix);
    gauss_Inversa();
}


function enter(){
// Obtén el botón y añade un listener al evento "keypress" del documento
document.addEventListener("keypress", function (event) {
    // Si la combinación enter
    if (event.keyCode == 13) {
        document.getElementById("accion").click();
    }
});
}
function reiniciarTabla() {
    // Obtén la referencia a la tabla
    var table = document.getElementById("miTabla");

    // Elimina todas las filas actuales de la tabla
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

    // Crea una nueva tabla de 3x3
    for (var i = 0; i < 3; i++) {
        var newRow = table.insertRow();
        for (var j = 0; j < 3; j++) {
            var newCell = newRow.insertCell();
            var input = document.createElement("input");
            input.className = "matrix-input";
            newCell.appendChild(input);
        }
    }
}

