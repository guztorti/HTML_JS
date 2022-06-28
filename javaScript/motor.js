document.getElementById('tbx3').onmouseover = esMayorDeEdad;
document.getElementById('txt4').onchange = sOn;
var entra = true;
function cargar() {
    let edad = prompt("Ingrese su edad", 18);
    document.getElementById('tbx3').setAttribute('value', edad);
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
