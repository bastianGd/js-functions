//Funcion que le pasamos el evento para cambiar el color
function cambiarBgNegro(event) {
  event.target.style.backgroundColor = "black";
}


const div1 = document.getElementById("blue");
const div2 = document.getElementById("red");
const div3 = document.getElementById("green");
const div4 = document.getElementById("yellow");

div1.addEventListener('click', cambiarBgNegro);
div2.addEventListener('click', cambiarBgNegro);
div3.addEventListener('click', cambiarBgNegro);
div4.addEventListener('click', cambiarBgNegro);
