//Funcion que le pasamos el evento para cambiar el color
function cambiarBgNegro(event) {
  event.target.style.backgroundColor = "black";
}

document.getElementById('blue').addEventListener('click', cambiarBgNegro);
document.getElementById('red').addEventListener('click', cambiarBgNegro);
document.getElementById('green').addEventListener('click', cambiarBgNegro);
document.getElementById('yellow').addEventListener('click', cambiarBgNegro);
