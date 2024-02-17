// VARIABLES DEL DOM

const $inputRojo = document.getElementById("rojo"),
  $inputVerde = document.getElementById("verde"),
  $inputAzul = document.getElementById("azul"),
  $textoRojo = document.getElementById("texto-rojo"),
  $textoVerde = document.getElementById("texto-verde"),
  $textoAzul = document.getElementById("texto-azul");

let rojo = $inputRojo.value;
let verde = $inputVerde.value;
let azul = $inputAzul.value;

// Actualizar el texto de los parrafos.
$textoRojo.innerText = rojo;
$textoVerde.innerText = verde;
$textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar RED

$inputRojo.addEventListener("change", (e) => {
    rojo = e.target.value;
    $textoRojo.textContent = rojo;
    actualizarColor(rojo,verde,azul);
});

// Para actualizar GREEN

$inputVerde.addEventListener("change", (e) => {
    verde = e.target.value;
    $textoVerde.textContent = verde;
    actualizarColor(rojo,verde,azul);
});

// Para actualizar BLUE
$inputAzul.addEventListener("change", (e) => {
    azul = e.target.value;
    $textoAzul.textContent = azul;
    actualizarColor(rojo,verde,azul);
});


