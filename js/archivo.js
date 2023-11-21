// Manejo de archivos

function save() {
  const content = document.getElementById('rawmatriz').value;
  const content2 = document.getElementById("rawmatriz2").value;
  const content3 = document.getElementById("rawmatriz3").value;

  console.log(content);
  console.log(content2);
  console.log(content3);
  
  if (content == '' || content2 == '' || content3 == '') {
    alert('hay un campo vacio');
    return;
  }

  

  const matrix = scanmatrix(content)
  let n = matrix.length;
  let m = matrix[0].length;

  // juntar los 3 textos
  let texto = 'gaus Jordan\n' + content + '\n\ndeterminante\n' + content2 + '\n\n\n inversa \n' + content3;
  // Crear un blob con el contenido del archivo
  const blob = new Blob([texto], { type: 'text/plain' });
  // Crear un enlace invisible
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `gauss${n}x${m}.txt`;


  // const blob = new Blob([content], { type: 'text/plain' }); // Crear un blob con el contenido del archivo
  // const link = document.createElement('a');
  // link.href = URL.createObjectURL(blob);
  // link.download = `gauss${n}x${m}.txt`;

  // Simular un clic en el enlace para iniciar la descarga
  link.click();

  // Limpiar después de un breve tiempo
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.remove();
  }, 100);
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
      input.value = cell;
      newCell.appendChild(input);
    });
  });
}

function parseMatrix(content) {
  const rows = content.trim().split("\n");
  return rows.map((row) => row.trim().split(/\s+/).map(Number));
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