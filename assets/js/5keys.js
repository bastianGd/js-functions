//Función para cambiar el color de los div
function changeDivBgColors(color) {
  //obtiene id del la caja 'box'
  const getBox = document.getElementById("key");
  //Cambia el color del background y pasa el color como argumento.
  getBox.style.backgroundColor = color;
}
//Función para crear el nuevo elemento
function newDivElement(color) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = color;
  newDiv.setAttribute("class", "dynamic-div")
  document.body.appendChild(newDiv);
}
//cambio color para key
document.addEventListener("keydown", function(event) {
  if (document.getElementById("key")) {
    if (event.key === "a") {
      changeDivBgColors("pink");
    } else if (event.key === "s") {
      changeDivBgColors("orange");
    } else if (event.key === "d") {
      changeDivBgColors("lightblue");
    } else if (event.key === "q") {
      newDivElement("purple");
    } else if (event.key === "w") {
      newDivElement("grey");
    } else if (event.key === "e") {
      newDivElement("brown");
    }
  }
});

