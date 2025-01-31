// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}



function agregarAmigo() {
    nombreAmigos = document.getElementById('amigo').value;
    if (nombreAmigos.length === 0) {
        alert("Por favor, inserte un nombre");
    }else{
        
    }
    return;
}


