let listaNombres = [];
let elementoLista = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#resultado");

function agregarAmigo() {
  //captura el nombe ingresado
  let inputNombre = document.getElementById("amigo").value;
  console.log(inputNombre);

  //verifica que haya un nombre
  if (inputNombre.length > 0) {
    listaNombres.push(inputNombre); //se ingresa el nombre a la lista
  } else {
    alert("ingrese un nombre"); //alerta de que no ingreso el nombre
  }

  console.log(listaNombres);
  //mostrar lista de nombres
  limpiarCaja(); //se llama a la funcion para cuando se ingresa el nombre del amigo a la liSTA se limpie el cuadro del input

  crearListaAmigos();
}

//funcion para mostrar nombres de la lista
function crearListaAmigos() {
  // limpia el Ul antes de empezar a iterar
  resultado.innerHTML = "";
  elementoLista.innerHTML = "";
  for (let i = 0; listaNombres.length > i; i++) {
    elementoLista.innerHTML += `<li>${listaNombres[i]}</li>`;
  }
}

//funcion para sortear y mostrar el elegido
function sortearAmigo() {
  if (listaNombres.length > 1) {
    let amigoSorteado = Math.floor(Math.random() * listaNombres.length);
    console.log(listaNombres[amigoSorteado]);
    elementoLista.innerHTML = "";
    resultado.innerHTML = `<li>${listaNombres[amigoSorteado]}</li>`;
    listaNombres = [];
  } else {
    alert("Debe agregar al menos 2 nombres para poder sortear");
  }
}

//limpia la caja del imput
function limpiarCaja() {
  let valorCaja = document.querySelector("#amigo");
  valorCaja.value = "";
}
