// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function recibirNombre() {
    let nombresDigitados = document.getElementById('amigo').value;
}