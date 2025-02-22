let listaNombres = [];
let elementoLista = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#resultado");

function agregarAmigo() {

  let inputNombre = document.getElementById("amigo").value;


  if (inputNombre.length > 0) {
    listaNombres.push(inputNombre); 
  } else {
    alert("ingrese un nombre"); 
  }
  limpiarCaja(); 

  crearListaAmigos();
}


function crearListaAmigos() {

  resultado.innerHTML = "";
  elementoLista.innerHTML = "";
  for (let i = 0; listaNombres.length > i; i++) {
    elementoLista.innerHTML += `<li>${listaNombres[i]}</li>`;
  }
}

function sortearAmigo() {
  if (listaNombres.length > 1) {
    let amigoSorteado = Math.floor(Math.random() * listaNombres.length);
    elementoLista.innerHTML = "";
    resultado.innerHTML = `<li>${listaNombres[amigoSorteado]}</li>`;
    listaNombres = [];
  } else {
    alert("Debe agregar al menos 2 nombres para poder sortear");
  }
}


function limpiarCaja() {
  let valorCaja = document.querySelector("#amigo");
  valorCaja.value = "";
}
