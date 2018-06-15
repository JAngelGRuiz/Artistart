/////////////////////////////// REGISTRO DE USUARIOS ////////////////////////////////////

let correo = document.getElementById('correo');
let nombre = document.getElementById('user');
let artista = document.getElementById('artista');
let genero = document.getElementById('genero');
let foto = document.getElementById('foto');
let desc = document.getElementById('descripcion');
let btnGuardar = document.getElementById('iniciar');

const ref = firebase.database().ref("artistas");

btnGuardar.addEventListener("click", () =>{

	let usuarios = {
		nombre: nombre.value,
		artista: artista.value,
		correo: correo.value,
		genero: genero.value,
		foto: foto.value,
		descripcion: desc.value,

	}

	console.log(usuarios)
	ref.push(usuarios)
	.then(() =>{
		alert("Se subió")
	}).catch((error) =>{
		console.log(error)
	})
})	

//////////////////////////////////////////////////////////////////////////////////////////



	// .value --> Para obtener el valor de un input.

