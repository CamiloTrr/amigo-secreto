// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.length != 0) {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        limpiarCampo();
    } else{
        alert("Por favor, inserte un nombre.");
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML= "";
    for (let i = 0; i<amigos.length; i++) {
        let elemento = document.createElement("li")
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }

}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}
