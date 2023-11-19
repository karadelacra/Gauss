// Manejo de matrices con fracciones
// Para realizar eliminación gaussiana y encontrar la inversa

// usando la función de gaus_jordaner

// igualando la matriz a la identidad
function inversa() {
    let matrix1 = scannmatrix('miTabla');
    const resultado = document.getElementById('inv');
// igualando la matriz a la identidad
    const n = matrix1.length;
    const m = matrix1[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = m; j < 2 * m; j++) {
            if (i === j - m) {
                matrix1[i].push(1);
            } else {
                matrix1[i].push(0);
            }
        }
    }
    let resultado1 = gauss_jordaner(matrix1);
    // quitar la identidad de la matriz inversa
    for (let i = 0; i < n; i++) {
        resultado1[i].splice(0, m);
    }

    console.log(resultado1);
    resultado.innerHTML = matrixToHTMLTable(resultado1);
}


function matrixToHTMLTable(matrix) {
    const table = document.createElement("table");
    matrix.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(val => {
            const td = document.createElement("td");
            td.textContent = val % 1 === 0 ? val.toString() : math.format(val, { fraction: 'ratio' });
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table.outerHTML;
}

function scanmatrix(matrixStr) {
    const rows = matrixStr.trim().split('\n');
    return rows.map(row => row.split(/\s+/).map(val => math.fraction(Number(val))));
}