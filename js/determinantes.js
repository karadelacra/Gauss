// const math = require('mathjs');

function scanmatrix_det(string) {
    let matrix_det = [];
    let rows_det = string.split("\n");
    for (let i = 0; i < rows_det.length; i++) {
        let stringrow_det = rows_det[i].trim();
        if (stringrow_det === "") {
            continue;
        }
        let fractions_det = stringrow_det.split(/\s+/);
        let row_det = [];
        for (let j = 0; j < fractions_det.length; j++) {
            let fraction_det = fractions_det[j].split("/");
            if (fraction_det.length === 1) {
                fraction_det.push(1);
            }
            row_det.push(math.fraction(Number(fraction_det[0]), Number(fraction_det[1])));
        }
        matrix_det.push(row_det);
    }
    return matrix_det;
}

function isSquareMatrix(matrix_det) {
    const numRows_det = matrix_det.length;
    const numCols_det = matrix_det[0].length;
    return numRows_det === numCols_det;
}

function determinant_by_definition(matrix_det) {
    const n_det = matrix_det.length;

    if (n_det === 1) {
        return matrix_det[0][0];
    }

    if (n_det === 2) {
        return math.subtract(
            math.multiply(matrix_det[0][0], matrix_det[1][1]),
            math.multiply(matrix_det[0][1], matrix_det[1][0])
        );
    }

    let det_det = math.fraction(0);

    for (let i = 0; i < n_det; i++) {
        const submatrix_det = matrix_det.slice(1).map(row => row.filter((_, j) => j !== i));
        const sign_det = (i % 2 === 0) ? 1 : -1;

        det_det = math.add(
            det_det,
            math.multiply(sign_det, matrix_det[0][i], determinant_by_definition(submatrix_det))
        );
    }

    return det_det;
}

function gauss_det() {
    // const textbox_det = document.getElementById("gauss");
    let matrix_det = scannmatrix('miTabla');
    const resultado_det = document.getElementById("determinantes");
    // let matrix_det = scanmatrix_det(textbox_det.value);
    console.log(matrix_det);

    if (!isSquareMatrix(matrix_det)) {
        resultado_det.innerText = "Solo se puede calcular el determinante de una matriz cuadrada";
        return;
    }

    const det_det = determinant_by_definition(matrix_det);

    const isInteger = math.isInteger(det_det);
    const detString = isInteger ? det_det.toString() : math.format(det_det, { fraction: 'ratio' });
    resultado_det.innerText = detString;
    return detString;
}

// imprimir en textarea oculto para que se pueda copiar
function impOculta(matrix){
    const textarea = document.getElementById("rawmatriz2");

    let resultado = gauss_det(matrix);
    textarea.value = resultado;
}