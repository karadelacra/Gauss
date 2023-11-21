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


function enter(){
// Obtén el botón y añade un listener al evento "keypress" del documento
document.addEventListener("keypress", function (event) {
    // Si la combinación enter
    if (event.keyCode == 13) {
        document.getElementById("accion").click();
    }
});
}
