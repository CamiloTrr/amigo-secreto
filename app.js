// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}



function agregarAmigo() {
    nombreAmigos = document.getElementById('amigo').value;
    if (nombreAmigos.length != 0) {
        let agregarNombre = nombreAmigos.push;
        console.table(nombreAmigos);
        
    }else{
        alert("Por favor, inserte un nombre");
    }
    limpiarcaja();
    return;
}

function limpiarcaja(){
    document.querySelector('#amigo').value = '';
}

