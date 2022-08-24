
const piezas = [
    {
        nombre: "Peon",
        movimiento: "El Peón se mueve hacia adelante una casilla. Si todavía no se ha movido, tiene la opción de mover dos casillas hacia adelante. No se pueden mover hacia atrás. También puede capturar una pieza adversaria en cualquiera de los escaques diagonales en frente.",
        imagen: "assets/images/peon.png"
    },
    {
        nombre: "Torre",
        movimiento: "La Torre se mueve en direcciones ortogonales, es decir, por las filas (horizontales) y columnas (verticales).",
        imagen: "assets/images/torre.png"
    },
    {
        nombre: "Alfil",
        movimiento: "El Alfil se mueve en direcciones diagonales, es decir, en la dirección de las casillas del mismo color.",
        imagen: "assets/images/alfil.png"
    },
    {
        nombre: "Dama",
        movimiento: "La Dama se mueve en todas las direcciones, tanto ortogonales como diagonales.",
        imagen: "assets/images/dama.png"
    },
    {
        nombre: "Rey",
        movimiento: "El Rey puede moverse en todas las direcciones pero una sola casilla a la vez, mientras no quede en jaque",
        imagen: "assets/images/rey.png"
    },
    {
        nombre: "Caballo",
        movimiento: "El Caballo se mueve en forma de L, o sea, mueve dos casillas en horizontal y después una en vertical, o viceversa. El caballo puede saltar sobre cualquier pieza suya o del adversario.",
        imagen: "assets/images/caballo.png"
    }
]

const text_busqueda = document.getElementById("txtbusqueda");
const result_busqueda = document.getElementById("resultado");
const imagen_busqueda = document.getElementById("img_pieza");

function buscar() {
    const termino_bus = text_busqueda.value;
    if( termino_bus !== ""){
        //solo busca si no esta vacio
        console.log("entro a la funcion buscar");
        console.log("El usuario esta buscando: ",termino_bus);
        //.toLocaleLowerCase() transforma en minuscula
        //find regreesa un elemento
        //filter regresa un array
        //toUpperCase() transforma a mayus
        //tolowercase() transforma tambien a minuscula
        const resultado = piezas.find(pieza => pieza.nombre.toLocaleLowerCase() == termino_bus.toLocaleLowerCase());
        console.log(resultado);
       // result_busqueda.innerHTML = resultado.movimiento;
      //  imagen_busqueda.src = resultado.imagen;

        if (resultado == undefined) {
            alert("No se encontro la pieza");
            result_busqueda.innerHTML = "No hay resultados";
            imagen_busqueda.src = "assets/images/logo_html_5.png"
        }else{
            result_busqueda.innerHTML = resultado.movimiento;
            imagen_busqueda.src = resultado.imagen;
        }

    } else{
        alert("Escribe");
        document.getElementById("txtbusqueda").focus();
    }

}

text_busqueda.addEventListener("keypress", function (event){
    if (event.key === "Enter") {
        event.preventDefault();
        buscar();
    }
});