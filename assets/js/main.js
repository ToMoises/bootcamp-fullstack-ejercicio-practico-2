console.log("Entro a main.js");

const paises = ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador", "Peru", "Uruguay", "Venezuela"];

const animales = ["Perro", "Gato", "Pájaro", "Conejo", "Caballo", "Oso", "Jirafa", "Vaca", "Cocodrilo", "Ballena", "Conejo", "Gato", "Perro", "Pájaro", "Conejo", "Caballo", "Oso", "Jirafa", "Vaca", "Cocodrilo", "Ballena"];

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nuevoArrayNumeros = [9,8,7,6,5,4,3,2,1];



function pasar_Paises(nombre) {
        for (let i = 0; i< paises.length; i++) {
            console.log(nombre[i]) 
        }
}

pasar_Paises(paises);

const imprimir = animales.map( nombres => {
    console.log(nombres)
    return animales;
});

console.log(animales);

function new_array(arr, newArr) {
    for (const numero of arr) {
      newArr.push(numero);
    }
    console.log(newArr);
  }
  new_array(numeros, nuevoArrayNumeros);

   //=================================

  const json_colores = `
{
    "arrayColores":[{
            "nombreColor":"rojo",
            "valorHexadec":"#f00"
        },
        {
            "nombreColor":"verde",
            "valorHexadec":"#0f0"
        },
        {
            "nombreColor":"azul",
            "valorHexadec":"#00f"
        },
        {
            "nombreColor":"cyan",
            "valorHexadec":"#0ff"
        },
        {
            "nombreColor":"magenta",
            "valorHexadec":"#f0f"
        },
        {
            "nombreColor":"amarillo",
            "valorHexadec":"#ff0"
        },
        {
            "nombreColor":"negro",
            "valorHexadec":"#000"
        }
    ]
}
`;

console.log(json_colores); 
const objeto_js = JSON.parse(json_colores);
console.log(objeto_js); 



objeto_js.arrayColores.forEach(item => {
  console.log(item.nombreColor);
});