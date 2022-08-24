console.log("ya entre");

class Perro{
    constructor(nombre){
        this.nombre = nombre;
    }
    //alt + 96 = `
    ladrar(){
        console.log(`${this.nombre} esta ladrando`);
    }

    sentar(){
        console.log(`${this.nombre} esta sentado`);
    }
}

let perro = new Perro("Codi");
perro.ladrar();
perro.sentar();

console.log("=============================================");

let perro_dalmata = new Perro("akira");
perro_dalmata.ladrar();
perro_dalmata.sentar();

class Persona{
    constructor(nombre,apellido,edad,genero,intereses){
     //   this.nombre = nombre;
     //   this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.intereses = intereses;
        this.nombre_completo ={
            nombre : nombre, 
            apellido : apellido
        }
    }

    saludo_alumno(){
        console.log(`Soy el alumno ${this.nombre_completo.nombre} ${this.nombre_completo.apellido} `)
    }

    saludo_profesor(){
        console.log(`Soy el Profesor ${this.nombre_completo.nombre} ${this.nombre_completo.apellido}`);
    }

    despedida(){
        console.log(`El alumno ${this.nombre_completo.nombre} con la edad de ${this.edad} años se despide`)
    }
}

class Maestro extends Persona{
    constructor(nombre,apellido,edad,genero,intereses,materia,grado){
        //se crea una funcion super() porque como es herencia y se saca con extend de persona
        super(nombre,apellido,edad,genero,intereses);
        this.materia= materia;
        this.grado = grado;
    }

    muestra_materia(){
        console.log(`Soy el profesor ${this.nombre_completo.nombre} ${this.nombre_completo.apellido} en la materia
                    ${this.materia} con el grado ${this.grado} `)
    }

     //como maestro extiende de persona y persona ya tiene despedida se esta sobreescribiendo (polimorfismo) despedida
     //puede valer dos cosas distintas
    despedida(){
        console.log(`El maestro ${this.nombre_completo.nombre} con la edad de ${this.edad} años se despide`)
    }
}

let profe = new Maestro("Moises","Torres","25","Masculino",["Programacion","basket","Chicas"],"Artes oscuras","5");
let alum = new Persona("alexis","povis","23","Masculino",["Citas","futbol","Rock"]);
 
profe.saludo_profesor();
alum.saludo_alumno();
alum.despedida();

profe.despedida();
profe.muestra_materia();
