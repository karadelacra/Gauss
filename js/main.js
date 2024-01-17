var WIDTH = 3;
var HEIGHT = 3;

function calculartodo() {
    const textbox = document.getElementById("gauss");
    document.getElementById("resultados").classList.remove("hidden")
    document.getElementById("resultado").classList.remove("hidden")
    document.getElementById("determinantes").classList.remove("hidden")
    document.getElementById("inv").classList.remove("hidden")
    let matrix = scannmatrix('miTabla');
    console.log("Matriz después de scannmatrix:", matrix);
    gauss(matrix);
    gauss_det(matrix);
    gauss_Inversa();
}


function checkEvents(){
document.addEventListener("keydown", function (event) {
    // Si se pulsan las flechas, mover el foco a la celda correspondiente
    const findNeighbors = (row, col) => {
        row = parseInt(row);
        col = parseInt(col);
        const neighbors = [];
        if (col === 0) neighbors.push(`cell-${row}-${HEIGHT - 1}`); // Arriba
        else neighbors.push(`cell-${row}-${col - 1}`);
        if (col === HEIGHT - 1) neighbors.push(`cell-${row}-0`); // Abajo
        else neighbors.push(`cell-${row}-${col + 1}`);
        if (row === 0) neighbors.push(`cell-${WIDTH - 1}-${col}`); // Izquierda
        else neighbors.push(`cell-${row - 1}-${col}`);
        if (row === WIDTH - 1) neighbors.push(`cell-0-${col}`); // Derecha
        else neighbors.push(`cell-${row + 1}-${col}`);
        return neighbors;
    };
    const cell = document.activeElement;
    const [row, col] = cell.id.split("-").slice(1);
    console.log(row, col);
    const neighbors = findNeighbors(row, col);
    switch (event.code) {
        case "ArrowUp":
            document.getElementById(neighbors[0]).focus();
            break;
        case "ArrowDown":
            document.getElementById(neighbors[1]).focus();
            break;
        case "ArrowLeft":
            document.getElementById(neighbors[2]).focus();
            break;
        case "ArrowRight":
            document.getElementById(neighbors[3]).focus();
            break;
        case "Enter":
            calculartodo();
            break;
        default:
            console.log(event.code);
    }
});
}
