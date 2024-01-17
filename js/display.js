// const { fraction } = require("mathjs");

function agregarFila() {
    var table = document.getElementById("miTabla");
    console.log("Fila agregada");
    var newRow = table.insertRow(-1);
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = `<input id="cell-${i}-${HEIGHT}" class="matrix-input" />`;
    }
    HEIGHT++;
}

function agregarColumna() {

    var table = document.getElementById("miTabla");
    for (var i = 0; i < table.rows.length; i++) {
        var cell = table.rows[i].insertCell(-1);
        cell.innerHTML = `<input id="cell-${WIDTH}-${i}" class="matrix-input" />`;
    }
    WIDTH++;
}

function borrarFila() {
    var table = document.getElementById("miTabla");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
    HEIGHT--;
}

function borrarColumna() {
    var table = document.getElementById("miTabla");
    if (table.rows[0].cells.length > 1) {
        for (var i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
    WIDTH--;
}

// la siguiente función es para meter los elementos de la matriz en un array

// display.js

function scannmatrix(id) {
    var table = document.getElementById(id);
    var matrix = [];

    if (!table) {
        console.error("Error: No se encontró la tabla con el ID:", id);
        return matrix;
    }

    for (var i = 0; i < table.rows.length; i++) {
        let row = [];

        for (var j = 0; j < table.rows[i].cells.length; j++) {
            let inputElement = table.rows[i].cells[j].children[0];
            let inputValue = inputElement.value.trim();

            console.log("Valor obtenido:", inputValue);

            // Verificar si el valor es una fracción
            try {
                let fraction = math.fraction(inputValue);
                row.push(fraction);
            } catch (error) {
                alert("Error al convertir el número en fracción");
                return matrix;
            }
        }

        matrix.push(row);
    }

    console.log("Matriz obtenida:", matrix);
    return matrix;
}