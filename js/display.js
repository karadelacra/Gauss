function agregarFila() {
    var table = document.getElementById("miTabla");
    var newRow = table.insertRow(-1);
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = '<input class="matrix-input" />';
    }
}

function agregarColumna() {
    var table = document.getElementById("miTabla");
    for (var i = 0; i < table.rows.length; i++) {
        var cell = table.rows[i].insertCell(-1);
        cell.innerHTML = '<input class="matrix-input" />';
    }
}

function borrarFila() {
    var table = document.getElementById("miTabla");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function borrarColumna() {
    var table = document.getElementById("miTabla");
    if (table.rows[0].cells.length > 1) {
        for (var i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
}

// la siguiente función es para meter los elementos de la matriz en un array
function scannmatrix(id) {
    var table = document.getElementById(id);
    var matrix = [];
    for (var i = 0; i < table.rows.length; i++) {
        matrix.push([]);
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            matrix[i].push(table.rows[i].cells[j].children[0].value);
        }
    }
    return matrix;
}