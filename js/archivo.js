// Manejo de archivos

function save() {
  const content = document.getElementById('rawmatriz').value;
  if (content === '') {
    return;
  }

  const matrix = scanmatrix(content)
  let n = matrix.length;
  let m = matrix[0].length;

  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `gauss${n}x${m}.txt`;

  // Simular un clic en el enlace para iniciar la descarga
  link.click();

  // Limpiar después de un breve tiempo
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.remove();
  }, 100);
}


function readtextfile() {
  const textbox = document.getElementById("gauss");
  const fileInput = document.getElementById("Carch").files[0];
  const reader = new FileReader();

  if (fileInput) {
    reader.onload = function (e) {
      textbox.value = e.target.result;
    };

    reader.readAsText(fileInput);
  } else {
    console.error("No se ha seleccionado ningún archivo.");
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
    }
    else{
      // limpiar el textbox
      textbox.value = '';
      reader.onload = function (e) {
        imagenMostrada.src = e.target.result;

        // Muestra datos de la imagen
        datosImagen.innerHTML = `
        <p>Nombre: ${archivo.name}</p>
        <p>Tipo: ${archivo.type}</p>
        <p>Tamaño: ${archivo.size} bytes</p>
      `;
      };
    }
    reader.readAsDataURL(archivo);

    // Muestra la sección de imagen y datos
    imagenContainer.style.display = 'block';
  } else {
    // Oculta la sección de imagen y datos si no hay archivo seleccionado
    imagenContainer.style.display = 'none';
  }
}