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
    // const textbox = document.getElementById("gauss");

    const inversaElement = document.getElementById("inv");

    // const matrix = scanmatrix(textbox.value);
    const matrix = scannmatrix('miTabla');

    if (!GaussModule.isSquareMatrix(matrix)) {
        const errorMessage = "Solo se puede calcular la inversa de una matriz cuadrada.";
        console.error(errorMessage);
        inversaElement.innerHTML = errorMessage;
        return;
    }

    const invertedMatrix = GaussModule.gauss_jordan_inverse(matrix);

    if (invertedMatrix === null) {
        const errorMessage2 = "No se puede calcular la inversa de la matriz.";
        console.error(errorMessage2);
        inversaElement.innerHTML = " No se puede calcular la inversa de la matriz.";
        return;
    }
    console.log(invertedMatrix);
    inversaElement.innerHTML = matrixToHTMLTable(invertedMatrix);
}

function matrixToHTMLTable(matrix)
{
    //se obtiene el numero de filas y columnas
    let n = matrix.length;
    let m = matrix[0].length;
    //se crea una tabla para mostrar los resultados en html separando filas de columnas visualmente con | y -
    let table = "<table>";
    //se recorre la matriz
    for (let i = 0; i < n; i++)
    {
        //se crea una fila
        table += "<tr>";
        //se recorre la fila
        for (let j = 0; j < m; j++)
        {
            //se crea una columna
            table += "<td>";
            //se agrega el valor de la celda
            table += matrix[i][j];
            //se cierra la columna
            table += "</td>";
        }
        //se cierra la fila
        table += "</tr>";
    }
    //se cierra la tabla
    table += "</table>";
    //se devuelve la tabla
    return table;
}

function scanmatrix(matrixStr) {
    const rows = matrixStr.trim().split('\n');
    return rows.map(row => row.split(/\s+/).map(Number));
}
