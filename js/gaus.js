// Manejo de matrices con fracciones
// Para realizar eliminación gaussiana

function toEc(matrix)
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

function toString(matrix)
{
    let string = "";
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j].s == -1)
            {
                string += "-";
            }

            if (matrix[i][j].d == 1)
            {
                string += matrix[i][j].n;
            }
            else
            {
                string += matrix[i][j].n + "/" + matrix[i][j].d;
            }
            if (j != matrix[i].length - 1)
            {
                string += " ";
            }
        }
        string += "\n";
    }
    return string;
}

function make_it_one(matrix, row, col)
{
    // get the pivot element and divide the row by it
    let pivot = matrix[row][col];
    for (let i = 0; i < matrix[row].length; i++)
    {
        matrix[row][i] = math.divide(matrix[row][i], pivot);
    }
}

function make_it_zero_under(matrix, row, col)
{
    // cancel the elements under the pivot
    let pivot = matrix[row][col];
    for (let i = row + 1; i < matrix.length; i++)
    {
        let factor = math.divide(matrix[i][col], pivot);
        for (let j = 0; j < matrix[i].length; j++)
        {
            matrix[i][j] = math.subtract(matrix[i][j], math.multiply(factor, matrix[row][j]));
        }
    }
}

function make_it_zero_above(matrix, row, col)
{
    // cancel the elements above the pivot
    let pivot = matrix[row][col];
    for (let i = row - 1; i >= 0; i--)
    {
        let factor = math.divide(matrix[i][col], pivot);
        for (let j = 0; j < matrix[i].length; j++)
        {
            matrix[i][j] = math.subtract(matrix[i][j], math.multiply(factor, matrix[row][j]));
        }
    }
}

function swap_rows(matrix, row1, row2)
{
    let temp = matrix[row1];
    matrix[row1] = matrix[row2];
    matrix[row2] = temp;
}

function gauss_jordaner(matrix) {
    console.log("Matriz recibida:", matrix);

    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let col = 0;
    
    while (row < n && col < m) {
        // find the pivot
        let pivot = matrix[row][col];
        
        if (math.equal(pivot, 0)) {
            // find a non-zero pivot
            let found = false;
            
            for (let i = row + 1; i < n; i++) {
                if (!math.equal(matrix[i][col], 0)) {
                    swap_rows(matrix, row, i);
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                col++;
                continue;
            }
        }
        
        // make the pivot one
        make_it_one(matrix, row, col);
        
        // cancel the elements under the pivot
        make_it_zero_under(matrix, row, col);
        
        // cancel the elements above the pivot
        make_it_zero_above(matrix, row, col);
        
        row++;
        col++;
    }
    
    return matrix;
}

function gauss(matrix) {
    const textarea = document.getElementById("rawmatriz");

    let resultado = gauss_jordaner(matrix);
    textarea.value = toString(resultado);

    let tabla = document.getElementById("resultado");

    console.log("Resultado antes de matrixToHTMLTable:", resultado);
    
    // Utiliza la función toEc en lugar de matrixToHTMLTable
    tabla.innerHTML = toEc(resultado);
}   