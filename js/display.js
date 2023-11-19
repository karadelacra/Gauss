// const { fraction } = require("mathjs");

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
        let row = [];
        // si la matriz tiene letras o espacios vacíos regresa un al usuario
        // que no se puede hacer la operación
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            let n = table.rows[i].cells[j].children[0].value
            if (n == "" || isNaN(n)) {
                alert("La matriz no puede tener letras o espacios vacíos");
                return;
            }
        }

        for (var j = 0; j < table.rows[i].cells.length; j++) {
            let n = table.rows[i].cells[j].children[0].value
            // the fraction may be written as a fraction or a whole number
            // if its a whole number set the denominator to 1
            let fraction = n.split("/");
            if (fraction.length == 1) {
                fraction.push(1);
            }
            row.push(math.fraction(fraction[0], fraction[1]));
            // matrix[i][j] = math.fraction(fraction[j]);

        }
        matrix[i] = row;
    }
    console.log(matrix);
    return matrix;
}