// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.length != 0) {
        amigos.push(nombreAmigo);
        
        limpiarCampo();
    } else{
        alert("Por favor, inserte un nombre.");
    }
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}
