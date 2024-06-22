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
  newDiv.style.border = "solid 1px black";
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
//cambio color para key
document.addEventListener("keydown", function (event) {
  if (document.getElementById("key"))
    switch (event.key) {
      case "a":
        changeDivBgColors("pink");
        break;
      case "s":
        changeDivBgColors("orange");
        break;
      case "d":
        changeDivBgColors("lightblue");
        break;
    }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    newDivElement("purple");
  } else if (event.key == "w") {
    newDivElement("grey");
  } else if (event.key == "e") {
    newDivElement("brown");
  }
});
