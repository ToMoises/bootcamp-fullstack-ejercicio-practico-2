class Calculadora{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    suma(){
        console.log(`La suma es ${this.num1 + this.num2}`)
    }

    resta(){
        console.log(`La resta es ${this.num1 - this.num2}`)
    }

    multi(){
        console.log(`La multiplicacion es ${this.num1 * this.num2}`)
    }

    divi(){
        console.log(`La division es ${this.num1 / this.num2}`)
    }
}

let x = prompt("Primer numero");
let y = prompt("Segundo numero");
var num1 = parseInt(x);
var num2 = parseInt(y);
let numero = new Calculadora (num1,num2);
console.log(num1);
console.log(num2);
numero.suma();
numero.resta();
numero.multi();
numero.divi();