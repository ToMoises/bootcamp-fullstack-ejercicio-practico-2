//lista de nombres 
let nombres = [];
let nombre_previo = "";
// al cargar la pagina editando esta en falso
let editando = false ;

const nombre = document.getElementById("txtnom");
//const agregar = document.getElementById("btnagregar");
//const borrar = document.getElementById("btnborrar");



//en el storage no se puede guardar arreglos
function addNombre(){
   const nom = nombre.value;
   if (editando == true) {
    
   }else{
    nombres.push(nom);
    //convertimos en un json  
    localStorage.setItem("nombres",JSON.stringify(nombres));
    console.log(nombres);
   }
}

//se va reutilizar mucho
function updateLista(){

}

function clearNombre(){
    localStorage.clear();
    nombres= [];
    console.log(nombres);
}