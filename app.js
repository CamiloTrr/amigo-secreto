// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creacion del array
let amigos = [];

//funcion para el boton añadir
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    //si el tamaño del array es diferente de 0 sigue con las acciones
    if (nombreAmigo.length != 0) {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        limpiarCampo();
    } else{
        alert("Por favor, inserte un nombre.");
    }
}

//se agrega los elementos añadidos al primer ul
function actualizarListaAmigos() {
    //limpiar la lista existente
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML= "";
    for (let i = 0; i<amigos.length; i++) {
        //se crea un nuevo elemento <li> para cada amigo
        let elemento = document.createElement("li")
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }

}

//se realiza el sorteo del amigo y se imprime en el segundo ul
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

//limpia el input
function limpiarCampo() {
    document.getElementById('amigo').value = '';
}
