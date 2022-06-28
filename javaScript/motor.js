document.getElementById('tbx3').onmouseover = esMayorDeEdad;
document.getElementById('txt4').onchange = sOn;

var entra = true;
function cargar() {
    let edad = prompt("Ingrese su edad", 18);
    document.getElementById('tbx3').setAttribute('value', edad);
    calculadora;
}
function esMayorDeEdad() {

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
function sOn() {

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
function apretarNumero(numero){
    if (document.getElementById('pantalla').value == 0){
    document.getElementById('pantalla').value = numero;
    }
    else{
    document.getElementById('pantalla').value +=numero;
    }
}

let operando1 = 0;
let operando2 = 0;
let resultado = 0;
let calculado = false;

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
    numDot.onclik = apretarNumero(',');
    commEq.onclik = calcular();

}
function borrar(){
    document.getElementById('pantalla').value = 0;
}
function calcular(){
    if(calculado)
        document.getElementById('pantalla').value = resultado;
}