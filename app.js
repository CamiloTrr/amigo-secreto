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

function sortearAmigo() {
    
    if (amigos.length != 0) {
        let numeroAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoAleatorio = amigos[numeroAleatorio];
        let resultadoAmigo = document.getElementById('resultado');
        resultadoAmigo.innerHTML = `el amigo secreto sorteado es: ${amigoAleatorio}`;
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML= "";

    } else {
        alert("La lista esta vacia");
    }
    
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}
