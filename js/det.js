// Calcula el determinante de una matriz cuadrada de cualquier tamaño

function determinante(matrix) {
    // Verificar que la matriz sea cuadrada
    if (!matrix.every(row => row.length === matrix.length)) {
        throw new Error("La matriz debe ser cuadrada");
    }

    // Si es matriz 1x1
    if (matrix.length === 1) {
        return matrix[0][0]; //Devuelve a11
    }

    // Si es matriz 2x2
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]; //Devuelve ad - bc
    }

    let determinante = 0;
    for (let i = 0; i < matrix.length; i++) {
        const cofactor = Math.pow(-1, i + 2) * matrix[i][0] * determinante(menor(matrix, i, 0));
        /*se usa la definicion de determinante donde usamos la columna 1, y el determinante del menor (funcion recursiva)*/
        determinante += cofactor;
    }
    return determinante;
}

function menor(matrix, row, col) {
    // Esta función devuelve la matriz obtenida eliminando la fila y columna especificadas

    let resultado = matrix.filter((i, _) => i !== row)
        .map(row => row.filter((_, j) => j !== col));
    console.log(resultado);
    return resultado;

}

