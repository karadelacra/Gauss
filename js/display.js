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

// display.js
function parseMatrix(content) {
    const rows = content.trim().split("\n");
    return rows.map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((value) => math.fraction(value))
    );
  }

function insertTextIntoTable(content) {
    const matrix = scanmatrix(content);
    if (!matrix) {
      console.error("El formato del archivo no es válido.");
      return;
    }
  
    const table = document.getElementById("miTabla");
    clearTable(table);
  
    matrix.forEach((row) => {
      const newRow = table.insertRow();
      row.forEach((cell) => {
        const newCell = newRow.insertCell();
        const input = document.createElement("input");
        input.className = "matrix-input";
        input.value = math.format(cell, { fraction: 'ratio' }); // Mostrar la fracción correctamente
        newCell.appendChild(input);
      });
    });
  }

  function scanmatrix(content) {
    const rows = content.trim().split("\n");
    return rows.map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((value) => math.fraction(value))
    );
  }
  
  function clearTable(table) {
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
  }