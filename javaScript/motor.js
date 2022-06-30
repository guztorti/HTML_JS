document.getElementById('tbx3').onmouseover = esMayorDeEdad;
document.getElementById('txt4').onchange = sOn;
window.onload = cargar;
const PANTALLA = document.getElementById('pantalla');

var entra = true;
function cargar() {
    //let edad = prompt("Ingrese su edad", 18);
    //document.getElementById('tbx3').setAttribute('value', edad);
    calculadora;
}
/* Ejercicio 3*/ function esMayorDeEdad() {

    if (entra) {
        if (Number(document.getElementById('tbx3').getAttribute('value')) >= 18) {
            document.getElementById('tbx3').setAttribute('value', 'Sos mayor de edad');
        } else {
            document.getElementById('tbx3').setAttribute('value', 'no sos mayor, sos MENOR de edad');
        }
        document.getElementById('lbl3').innerHTML = "ya se ejecutó";
        document.getElementById('lbl3').setAttribute('class', 'opacity-50')

        entra = false;
    }
}
/* Ejercicio 4 */ function sOn() {

    var caracter = String(document.getElementById('txt4').value);
    try {
        switch (caracter.toLowerCase()) {
            case 's':
            case 'n':
                alert(`correcto!!`);
                break;

            default:{
                alert(`incorrecto`);
                document.getElementById('txt4').value ='';
                document.getElementById('txt4').focus;
            }
                break;
        }
    } catch (error) {
        alert(error);
    }

}
/*Ejercicio 5*/{
function apretarNumero(numero){
    if (PANTALLA.value.length === 12){
        return;
    }
    if(calculado){
        PANTALLA.value = numero;
        calculado = false;
    }else if (PANTALLA.value == 0){
        PANTALLA.value = numero;
        }
        else{
        PANTALLA.value +=numero;
        }
    if (numero === ','){
        document.getElementById('btnPunto').disabled = true;
    }
    evaluarEsPar();
}

let operando1 = 0;
let calculado = false;
let operador;

function calculadora(){
    const num1 = document.getElementById('btn1');
    const num2 = document.getElementById('btn2');
    const num3 = document.getElementById('btn3');
    const num4 = document.getElementById('btn4');
    const num5 = document.getElementById('btn5');
    const num6 = document.getElementById('btn6');
    const num7 = document.getElementById('btn7');
    const num8 = document.getElementById('btn8');
    const num9 = document.getElementById('btn9');
    const num0 = document.getElementById('btn0');
    const numDot = document.getElementById('btnPunto');
    const commEq = document.getElementById('btnIgual');
    const commback = document.getElementById('btnAtras');
    const commReset = document.getElementById('btnBorrar');
    const commMultip = document.getElementById('btnMul');
    const commDividir = document.getElementById('btnDiv');
    const commSumar = document.getElementById('btnMas');
    const commRestar = document.getElementById('btnMenos');    

    num1.onclik = apretarNumero(1);
    num2.onclik = apretarNumero(2);
    num3.onclik = apretarNumero(3);
    num4.onclik = apretarNumero(4);
    num5.onclik = apretarNumero(5);
    num6.onclik = apretarNumero(6);
    num7.onclik = apretarNumero(7);
    num8.onclik = apretarNumero(8);
    num9.onclik = apretarNumero(9);
    num0.onclik = apretarNumero(0);
    numDot.onclik = apretarNumero();
    commEq.onclik = calcular(operador);
    commback = atras();
    commReset = borrar();
    commMultip = multiplicar();
    commDividir = dividir();
    commSumar = sumar();
    commRestar = restar();

}
function borrar(){
    operando1 = 0;
    calculado = false;
    PANTALLA.value = 0;
}

function atras(){

    if(PANTALLA.value.length>0){
    PANTALLA.value = String(PANTALLA.value).substring(0,PANTALLA.value.length-1)
    }else{
        PANTALLA.value = 0;
    }
    evaluarEsPar();
}
function calcular(){
    switch(operador){
        case '+':
            PANTALLA.value = operando1 + Number(PANTALLA.value);
           
            break;
        case '-':
            PANTALLA.value = operando1 - Number(PANTALLA.value);
            break; 
        case '*':
            PANTALLA.value = operando1 * Number(PANTALLA.value);
            break;
        case '/':
            PANTALLA.value = operando1 / Number(PANTALLA.value);
            break; 
    }
    calculado = true;
    evaluarEsPar();
}

function sumar(){
    operando1 += Number(PANTALLA.value);
    operador = '+';
    PANTALLA.value = operando1;
    calculado = true;
    evaluarEsPar();
}
function multiplicar(){
    if(operando1 == 0){operando1 = 1}
    operando1 *= Number(PANTALLA.value);
    operador = '*';
    PANTALLA.value = operando1;
    calculado = true;
    evaluarEsPar();
}
function restar(){
    if(calculado){
        operando1 = Number(PANTALLA.value)*-1;
    }else {
    operando1 = Number(PANTALLA.value);
    operador = '-';
    PANTALLA.value = operando1;
    calculado = true;
    }
    evaluarEsPar()
}
function dividir(){
    operando1 = Number(PANTALLA.value);
    operador = '/';
    PANTALLA.value = operando1;
    calculado = true;
    evaluarEsPar();
} 
}
/* Ejercicio 6 */{
    function evaluarEsPar(){
        if(PANTALLA.value%2===0){
            document.querySelector('#esPar').textContent = "El número en la pantalla es PAR";
        }else {
            document.querySelector('#esPar').textContent = "El número en la pantalla es IMPAR";
        }
    }


/* Ejercicio 10 */ {
//let palabra = prompt("Ingrese palabra a invertir");
//let invertida = (palabra)=> console.log(palabra.split('').reverse().join(''));
//invertida(palabra);
}
}
/* Ejercicio 12 */{
    let tipoDeDato = (argumento) => console.log(typeof argumento);
    tipoDeDato(new Set([2,2,3,3,4,4,4]))
}