// Manejo de archivos

// const { re } = require("mathjs");

function save() {
  const content = document.getElementById('rawmatriz').value;
  const content2 = document.getElementById("rawmatriz2").value;
  const content3 = document.getElementById("rawmatriz3").value;

  console.log(content);
  console.log(content2);
  console.log(content3);

  if (content2 == 0) {
    const matrix = scanmatrix(content)
    let n = matrix.length;
    let m = matrix[0].length;
    // Crear un blob con el contenido del archivo
    let texto = 'gaus Jordan\n' + content + '\n\ndeterminante\n' + content2 + '\n\n\n inversa \n' + 'La matriz no tiene inversa.';
    let blob = new Blob([texto], { type: 'text/plain' });
    // Crear un objeto URL del blob
    let blobUrl = URL.createObjectURL(blob);
    // Crear un tag <a>
    let anchor = document.createElement('a');
    // Setear el nombre del archivo
    anchor.download = 'gausJordan.txt';
    // Setear la URL
    anchor.href = blobUrl;
    // Hacer click en el link
    anchor.click();

  } else if (content != 0 && content2 != 0) {

    const matrix = scanmatrix(content)
    let n = matrix.length;
    let m = matrix[0].length;
    // Crear un blob con el contenido del archivo
    let texto = 'gaus Jordan\n' + content + '\n\ndeterminante\n' + content2 + '\n\n\n inversa \n' + content3;
    let blob = new Blob([texto], { type: 'text/plain' });
    // Crear un objeto URL del blob
    let blobUrl = URL.createObjectURL(blob);
    // Crear un tag <a>
    let anchor = document.createElement('a');
    // Setear el nombre del archivo
    anchor.download = 'gausJordan.txt';
    // Setear la URL
    anchor.href = blobUrl;
    // Hacer click en el link
    anchor.click();
  }
  // si en content2 es 0 no se guarda la inversa
  else if (!isSquareMatrix(content)) {
    const matrix = scanmatrix(content)
    let n = matrix.length;
    let m = matrix[0].length;
    // Crear un blob con el contenido del archivo
    let texto = 'gaus Jordan\n' + content + '\n\ndeterminante\n' + 'La matriz no es cuadrada' + '\n\n\n inversa \n' + 'La matriz no es cuadrada';
    let blob = new Blob([texto], { type: 'text/plain' });
    // Crear un objeto URL del blob
    let blobUrl = URL.createObjectURL(blob);
    // Crear un tag <a>
    let anchor = document.createElement('a');
    // Setear el nombre del archivo
    anchor.download = 'gausJordan.txt';
    // Setear la URL
    anchor.href = blobUrl;
    // Hacer click en el link
    anchor.click();
  }
}
// identificar la extensión del archivo
function identify() {
  const fileInput = document.getElementById('Carch');
  const file = fileInput.files[0];
  const extension = file.name.split('.').pop();
  console.log(extension);
  if (extension == 'txt') {
    readtextfile();
  } else {
    mostrarImagenYDatos();
  }
}


function readtextfile() {
  const fileInput = document.getElementById("Carch").files[0];
  const reader = new FileReader();

  if (fileInput) {
    reader.onload = function (e) {
      const content = e.target.result;
      insertTextIntoTable(content);
    };

    reader.readAsText(fileInput);
  } else {
    console.error("No se ha seleccionado ningún archivo.");
  }
}


function insertTextIntoTable(content) {
  const matrix = parseMatrix(content);
  if (!matrix) {
    console.error("El formato del archivo no es válido.");
    return;
  }

  const table = document.getElementById("miTabla");
  clearTable(table);

  matrix.forEach((row) => {
    const newRow = table.insertRow();
    row.forEach((cell) => {
      const newCell = newRow.insertCell();
      const input = document.createElement("input");
      input.className = "matrix-input";

      // Verificar si el valor es un entero o un número con decimales
      const isInteger = math.isInteger(cell);
      input.value = isInteger ? cell : math.format(cell, { fraction: 'ratio' });

      newCell.appendChild(input);
    });
  });
}


function parseMatrix(content) {
  const rows = content.trim().split("\n");
  return rows.map((row) =>
    row
      .trim()
      .split(/\s+/)
      .map((value) => math.fraction(value))
  );
}

function clearTable(table) {
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

function mostrarImagenYDatos() {
  document.getElementById('imagenMostrada').src = '';
  document.getElementById('datosImagen').innerHTML = '';
  const archivoInput = document.getElementById('Carch');
  const imagenContainer = document.getElementById('imagenContainer');
  const imagenMostrada = document.getElementById('imagenMostrada');
  const datosImagen = document.getElementById('datosImagen');
  const textbox = document.getElementById("gauss");

  const archivo = archivoInput.files[0];

  if (archivo) {
    const reader = new FileReader();
    if (archivo.type == 'text/plain') {
      reader.onload = function (e) {
        textbox.value = e.target.result;
      };

      reader.readAsText(archivo);
      return;
    } else {
      textbox.value = '';
      reader.onload = function (e) {
        imagenMostrada.src = e.target.result;

        datosImagen.innerHTML = `
          <p>Nombre: ${archivo.name}</p>
          <p>Tipo: ${archivo.type}</p>
          <p>Tamaño: ${archivo.size} bytes</p>
        `;
      };
    }
    reader.readAsDataURL(archivo);

    imagenContainer.style.display = 'block';
  } else {
    imagenContainer.style.display = 'none';
  }
}

function scanmatrix(content) {
  const matrix = parseMatrix(content);
  if (!matrix) {
    console.error("El formato del archivo no es válido.");
    return;
  }
  return matrix;
}