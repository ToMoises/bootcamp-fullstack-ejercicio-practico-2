console.log("Entro al js");
const titulo = document.getElementById("titulo");

//localStorage.setItem("Hermana","Sofia");
//localStorage.setItem("ColorPagina","blue");

let cat = localStorage.getItem("Hermana");
let color = localStorage.getItem("ColorPagina");
if (color == null) {
    color = "green";
}
titulo.style.color = color;
console.log(cat);

localStorage.clear();