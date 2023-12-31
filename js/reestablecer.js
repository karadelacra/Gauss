// reestablecer valores predeterminados
function reset(){
    // reestablecer valores predeterminados de la matriz dejando 3 filas y 3 columnas
    var table = document.getElementById("miTabla");
    // borrar filas
    while (table.rows.length > 3) {
        table.deleteRow(-1);
    }
    // borrar columnas
    while (table.rows[0].cells.length > 3) {
        for (var i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
    // agregar filas
    while (table.rows.length < 3) {
        var newRow = table.insertRow(-1);
        for (var i = 0; i < table.rows[0].cells.length; i++) {
            var cell = newRow.insertCell(i);
            cell.innerHTML = '<input class="matrix-input" />';
        }
    }
    // agregar columnas
    while (table.rows[0].cells.length < 3) {
        for (var i = 0; i < table.rows.length; i++) {
            var cell = table.rows[i].insertCell(-1);
            cell.innerHTML = '<input class="matrix-input" />';
        }
    }
    // hacer hidden los resultados
    document.getElementById("resultados").classList.add("hidden")
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