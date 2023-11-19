// los botones de la calculadora escriben en el display sus valores respectivos
// Función para escribir en el contenedor
//comentario3


function escribirEnContenedor(caracter) {
    let contenedor = document.getElementById("gauss");
    contenedor.value += caracter;
}

// Funciones para los botones del teclado
function uno() {
    escribirEnContenedor("1");
}

function dos() {
    escribirEnContenedor("2");
}

function tres() {
    escribirEnContenedor("3");
}

function cuatro() {
    escribirEnContenedor("4");
}

function cinco() {
    escribirEnContenedor("5");
}

function seis() {
    escribirEnContenedor("6");
}

function siete() {
    escribirEnContenedor("7");
}

function ocho() {
    escribirEnContenedor("8");
}

function nueve() {
    escribirEnContenedor("9");
}

function cero() {
    escribirEnContenedor("0");
}

function espacio() {
    escribirEnContenedor(" ");
}

function enter() {
    escribirEnContenedor("\n");
}

function borrar() {
    let contenedor = document.getElementById("gauss");
    contenedor.value = contenedor.value.slice(0, -1);
}

function menos() {
    escribirEnContenedor("-");
}
