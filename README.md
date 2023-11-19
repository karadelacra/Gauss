# Gauss
Página -> gaus jordan
<!-- éste es un reedme de la página web de gauss -->

el programa se separa en carpetas y archivos, cada uno con su función específica, para que sea más fácil de entender y de modificar.

## carpetas
img - contiene las imágenes que se usan en la página web
js - contiene los archivos de javascript
style - contiene los archivos de css
templates - contiene los archivos html que se usan en la página web
index.html - es la página principal de la página web

La página web se compone de 3 funciones principales:
- gausJordaner - que es la función que se encarga de hacer la eliminación gaussiana
- determinante - que es la función que se encarga de calcular el determinante de una matriz
- inversa - que es la función que se encarga de calcular la inversa de una matriz

las 3 funciones se ejecutan en el archivo main.js, que es el que se encarga de hacer la interacción entre el usuario y la página web.

<!-- e incluso se puede ejecutar el programa con la combinación de teclas sHIFT + ENTER -->

para que las 3 funciones se ejecuten, se debe de escribir una matriz en el display, y después presionar el botón de la función que se quiere ejecutar.

si la matriz no es cuadrada, se mostrará un mensaje de error en las funciones de determinante e inversa.

si la matriz es cuadrada, se ejecutará la función correspondiente, y se mostrará el resultado en el display.