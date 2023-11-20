function gauss(matrix) {
    const textarea = document.getElementById("rawmatriz");
    let resultado = gauss_jordaner(matrix);
    textarea.value = matrixToHTMLTable(resultado);

    document.getElementById("resultados").classList.remove("hidden")
    document.getElementById("resultado").classList.remove("hidden")
    document.getElementById("determinantes").classList.remove("hidden")
    document.getElementById("inv").classList.remove("hidden")
    let tabla = document.getElementById("resultado");

    tabla.innerHTML = matrixToHTMLTable(resultado);
}

function calculartodo() {
    const textbox = document.getElementById("gauss");
    // let matrix = scanmatrix(textbox.value)
    let matrix = scannmatrix('miTabla');
    console.log(matrix);
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
