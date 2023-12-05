// Max Miguel 

const GaussModule = (function () {
    function isSquareMatrix(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        return rows === cols;
    }

    function identityMatrix(size) {
        const identity = [];
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row.push(i === j ? math.fraction(1) : math.fraction(0));
            }
            identity.push(row);
        }
        return identity;
    }

    function augmentMatrix(matrix, identity) {
        const augmentedMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            augmentedMatrix.push([...matrix[i], ...identity[i]]);
        }
        return augmentedMatrix;
    }

    function gauss_jordan_inverse(matrix) {
        if (!isSquareMatrix(matrix)) {
            console.error("Error: Solo se puede calcular la inversa de una matriz cuadrada.");
            return null;
        }

        const rows = matrix.length;
        const cols = matrix[0].length;

        const identity = identityMatrix(rows);

        const augmentedMatrix = augmentMatrix(matrix, identity);

        for (let i = 0; i < rows; i++) {
            let pivotIndex = i;
            for (let j = i + 1; j < rows; j++) {
                if (math.abs(augmentedMatrix[j][i]) > math.abs(augmentedMatrix[pivotIndex][i])) {
                    pivotIndex = j;
                }
            }

            if (math.equal(augmentedMatrix[pivotIndex][i], 0)) {
                console.error("Error: La matriz no tiene inversa.");
                return null;
            }

            [augmentedMatrix[i], augmentedMatrix[pivotIndex]] = [augmentedMatrix[pivotIndex], augmentedMatrix[i]];

            const pivot = augmentedMatrix[i][i];
            for (let j = 0; j < cols * 2; j++) {
                augmentedMatrix[i][j] = math.divide(augmentedMatrix[i][j], pivot);
            }

            for (let j = 0; j < rows; j++) {
                if (j !== i) {
                    const factor = augmentedMatrix[j][i];
                    for (let k = 0; k < cols * 2; k++) {
                        augmentedMatrix[j][k] = math.subtract(augmentedMatrix[j][k], math.multiply(factor, augmentedMatrix[i][k]));
                    }
                }
            }
        }

        const inverse = augmentedMatrix.map(row => row.slice(cols));

        return inverse;
    }

    return {
        gauss_jordan_inverse: gauss_jordan_inverse,
        isSquareMatrix: isSquareMatrix,
    };
})();

function gauss_Inversa() {


    const inversaElement = document.getElementById("inv");

    const matrix = scannmatrix('miTabla');  // <-- Cambiado de 'scannmatrix' a 'scanmatrix'

    if (!GaussModule.isSquareMatrix(matrix)) {
        const errorMessage = "Solo se puede calcular la inversa de una matriz cuadrada.";
        console.error(errorMessage);
        inversaElement.innerHTML = errorMessage;
        return;
    }
    if (determinant_by_definition(matrix) === 0) {
        const errorMessage1 = "La matriz no tiene inversa.";
        console.error(errorMessage1);
        inversaElement.innerHTML = errorMessage1;
        const textarea = document.getElementById("rawmatriz3");
        textarea.value = "La matriz no tiene inversa."
        return;
    }
    const invertedMatrix = GaussModule.gauss_jordan_inverse(matrix);

    if (invertedMatrix === null) {
        const errorMessage2 = "La matriz ingresada es singular, lo que implica que no tiene una inversa.";
        console.error(errorMessage2);
        inversaElement.innerHTML = "La matriz ingresada es singular, lo que implica que no tiene una inversa.";
        return;
    }
    // si las fracciones se pueden simplificar, se simplifican
    for (let i = 0; i < invertedMatrix.length; i++) {
        for (let j = 0; j < invertedMatrix[0].length; j++) {
            if (invertedMatrix[i][j].s % invertedMatrix[i][j].d === 0) {
                invertedMatrix[i][j] = invertedMatrix[i][j].s / invertedMatrix[i][j].d;
            }
        }
    }
    inversaElement.innerHTML = matrixToHTMLTable(invertedMatrix);
    const textarea = document.getElementById("rawmatriz3");
    textarea.value = toString(invertedMatrix);
}
function matrixToHTMLTable(matrix) {

    const table = document.createElement("table");
    matrix.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(val => {
            const td = document.createElement("td");
            td.textContent = math.format(val, { fraction: 'ratio' });  // <-- Cambiado de 'val.toString()' a 'math.format(val, { fraction: 'ratio' })'
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table.outerHTML;
}
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
            let input = table.rows[i].cells[j].children[0].value;

            // Verificar si el valor es un número
            if (input === "" || isNaN(input)) {
                alert("La matriz no puede tener letras o espacios vacíos");
                return matrix;
            }

            // Intentar convertir el valor en una fracción
            try {
                let fraction = math.fraction(input);
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

